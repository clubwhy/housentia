import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';
import { sanitizeText } from '@/lib/sanitize';

interface SolarAPIResponse {
  name: string;
  regionCode: string;
  solarPotential: {
    maxArrayPanelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentStats: Array<{
      pitchDegrees: number;
      azimuthDegrees: number;
      groundAreaMeters2: number;
      roofSegmentPresent: boolean;
    }>;
  };
  configs: Array<{
    name: string;
    panelsCount: number;
    yearlyEnergyDcKwh: number;
    roofSegmentConfigs: Array<{
      roofSegmentId: number;
      panelsCount: number;
      yearSegmentEnergyDcKwh: number;
    }>;
  }>;
}

/**
 * Validate coordinates are within US bounds
 */
function validateUSCoordinates(lat: number, lng: number): boolean {
  // US bounding box
  const US_BOUNDS = {
    minLat: 24.396308,
    maxLat: 49.384358,
    minLng: -125.0,
    maxLng: -66.93457
  };
  
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= US_BOUNDS.minLat &&
    lat <= US_BOUNDS.maxLat &&
    lng >= US_BOUNDS.minLng &&
    lng <= US_BOUNDS.maxLng
  );
}

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address || typeof address !== 'string') {
      return NextResponse.json(
        { error: 'Address is required' },
        { status: 400 }
      );
    }
    
    // Validate address format (basic check)
    if (address.length > 200 || address.length < 5) {
      return NextResponse.json(
        { error: 'Invalid address format' },
        { status: 400 }
      );
    }
    
    // Sanitize address input
    const sanitizedAddress = sanitizeText(address, 200);
    if (!sanitizedAddress || sanitizedAddress.length < 5) {
      return NextResponse.json(
        { error: 'Invalid address format' },
        { status: 400 }
      );
    }

    // Check if we have Google API key
    const apiKey = process.env.GOOGLE_SOLAR_API_KEY;
    
    if (!apiKey) {
      // Return mock data if no API key is configured
      return NextResponse.json({
        mock: true,
        data: {
          maxArrayPanelsCount: 20,
          yearlyEnergyDcKwh: 8000,
          recommendedSizeKw: 6.5,
          roofArea: 1200,
          annualSunlight: 1800,
          configs: [
            {
              name: "RECOMMENDED",
              panelsCount: 20,
              yearlyEnergyDcKwh: 8000
            }
          ]
        }
      });
    }

    // Geocode the address first
    // Note: Google Maps Geocoding API requires key as URL parameter (this is their API design)
    // Use AbortController for timeout protection
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(sanitizedAddress)}&key=${apiKey}`;
      const geocodeResponse = await fetch(geocodeUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Housentia/1.0'
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!geocodeResponse.ok) {
        throw new Error('Geocoding failed');
      }
      
      const geocodeData = await geocodeResponse.json();
      
      // Validate response structure
      if (!geocodeData.results || !Array.isArray(geocodeData.results) || geocodeData.results.length === 0) {
        return NextResponse.json(
          { error: 'Could not find location for the provided address' },
          { status: 404 }
        );
      }
      
      const location = geocodeData.results[0].geometry.location;
      const { lat, lng } = location;
      
      // Validate coordinates are within reasonable bounds (US coordinates only)
      if (!validateUSCoordinates(lat, lng)) {
        return NextResponse.json(
          { error: 'Address must be within United States' },
          { status: 400 }
        );
      }
      
      // Call Google Solar API (API key in header, not URL)
      const solarController = new AbortController();
      const solarTimeoutId = setTimeout(() => solarController.abort(), 10000);
      
      try {
        const solarUrl = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}`;
        const solarResponse = await fetch(solarUrl, {
          signal: solarController.signal,
          headers: {
            'X-Goog-Api-Key': apiKey,
            'User-Agent': 'Housentia/1.0'
          }
        });
        
        clearTimeout(solarTimeoutId);
        
        if (!solarResponse.ok) {
          throw new Error(`Solar API error: ${solarResponse.status}`);
        }
        
        const solarData: SolarAPIResponse = await solarResponse.json();
        
        // Extract the recommended configuration
        const recommendedConfig = solarData.configs.find(config => 
          config.name === "RECOMMENDED" || config.name.includes("RECOMMENDED")
        ) || solarData.configs[0];
        
        // Calculate roof area from segments
        const totalRoofArea = solarData.solarPotential.roofSegmentStats
          .filter(segment => segment.roofSegmentPresent)
          .reduce((sum, segment) => sum + segment.groundAreaMeters2, 0);
        
        // Convert to square feet
        const roofAreaSqFt = totalRoofArea * 10.764;
        
        // Calculate recommended system size in kW (assuming 400W panels)
        const recommendedSizeKw = (recommendedConfig.panelsCount * 400) / 1000;
        
        return NextResponse.json({
          mock: false,
          data: {
            maxArrayPanelsCount: solarData.solarPotential.maxArrayPanelsCount,
            yearlyEnergyDcKwh: recommendedConfig.yearlyEnergyDcKwh,
            recommendedSizeKw,
            roofArea: Math.round(roofAreaSqFt),
            annualSunlight: 1800, // This would need to be calculated from solar data
            configs: solarData.configs,
            panelsCount: recommendedConfig.panelsCount
          }
        });
      } catch (solarError) {
        if (solarError instanceof Error && solarError.name === 'AbortError') {
          return NextResponse.json({ error: 'Request timeout' }, { status: 504 });
        }
        throw solarError;
      }
    } catch (geocodeError) {
      if (geocodeError instanceof Error && geocodeError.name === 'AbortError') {
        return NextResponse.json({ error: 'Request timeout' }, { status: 504 });
      }
      throw geocodeError;
    }
    
    if (!solarResponse.ok) {
      throw new Error(`Solar API error: ${solarResponse.status}`);
    }

    const solarData: SolarAPIResponse = await solarResponse.json();

    // Extract the recommended configuration
    const recommendedConfig = solarData.configs.find(config => 
      config.name === "RECOMMENDED" || config.name.includes("RECOMMENDED")
    ) || solarData.configs[0];

    // Calculate roof area from segments
    const totalRoofArea = solarData.solarPotential.roofSegmentStats
      .filter(segment => segment.roofSegmentPresent)
      .reduce((sum, segment) => sum + segment.groundAreaMeters2, 0);

    // Convert to square feet
    const roofAreaSqFt = totalRoofArea * 10.764;

    // Calculate recommended system size in kW (assuming 400W panels)
    const recommendedSizeKw = (recommendedConfig.panelsCount * 400) / 1000;

    return NextResponse.json({
      mock: false,
      data: {
        maxArrayPanelsCount: solarData.solarPotential.maxArrayPanelsCount,
        yearlyEnergyDcKwh: recommendedConfig.yearlyEnergyDcKwh,
        recommendedSizeKw,
        roofArea: Math.round(roofAreaSqFt),
        annualSunlight: 1800, // This would need to be calculated from solar data
        configs: solarData.configs,
        panelsCount: recommendedConfig.panelsCount
      }
    });

  } catch (error) {
    console.error('Solar API error:', error);
    
    // Return mock data as fallback
    return NextResponse.json({
      mock: true,
      data: {
        maxArrayPanelsCount: 20,
        yearlyEnergyDcKwh: 8000,
        recommendedSizeKw: 6.5,
        roofArea: 1200,
        annualSunlight: 1800,
        configs: [
          {
            name: "RECOMMENDED",
            panelsCount: 20,
            yearlyEnergyDcKwh: 8000
          }
        ],
        panelsCount: 20
      }
    });
  }
} 