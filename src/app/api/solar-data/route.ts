import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(request: NextRequest) {
  try {
    const { address } = await request.json();

    if (!address) {
      return NextResponse.json(
        { error: 'Address is required' },
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
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();

    if (!geocodeData.results || geocodeData.results.length === 0) {
      return NextResponse.json(
        { error: 'Could not find location for the provided address' },
        { status: 404 }
      );
    }

    const location = geocodeData.results[0].geometry.location;
    const { lat, lng } = location;

    // Call Google Solar API
    const solarUrl = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&key=${apiKey}`;
    const solarResponse = await fetch(solarUrl);
    
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