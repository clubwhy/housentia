import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  let connection;
  try {
    const body = await request.json();
    const { userInfo, preferences } = body;

    if (!userInfo || !userInfo.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    connection = await pool.getConnection();

    // Check if user already exists
    const rows = await connection.query(
      'SELECT * FROM optout WHERE user_email = ?',
      [userInfo.email]
    );

    if (rows && rows.length > 0) {
      // Update existing user
      await connection.execute(
        `UPDATE optout SET 
          user_name = ?, 
          user_phone = ?,
          user_ip = ?,
          email_property_updates = ?,
          email_market_insights = ?,
          email_home_improvement = ?,
          email_promotional_offers = ?,
          sms_property_alerts = ?,
          sms_appointment_reminders = ?,
          push_browser_notifications = ?,
          push_mobile_notifications = ?,
          analytics_website_analytics = ?,
          analytics_personalized_recommendations = ?,
          third_party_partner_recommendations = ?,
          third_party_advertising_networks = ?,
          cookies_analytics = ?,
          cookies_marketing = ?,
          updated_at = CURRENT_TIMESTAMP
        WHERE user_email = ?`,
        [
          userInfo.name,
          userInfo.phone || null,
          ip,
          preferences.email.propertyUpdates,
          preferences.email.marketInsights,
          preferences.email.homeImprovement,
          preferences.email.promotionalOffers,
          preferences.sms.propertyAlerts,
          preferences.sms.appointmentReminders,
          preferences.push.browserNotifications,
          preferences.push.mobileNotifications,
          preferences.analytics.websiteAnalytics,
          preferences.analytics.personalizedRecommendations,
          preferences.thirdParty.partnerRecommendations,
          preferences.thirdParty.advertisingNetworks,
          preferences.cookies.analytics,
          preferences.cookies.marketing,
          userInfo.email
        ]
      );
    } else {
      // Insert new user
      await connection.execute(
        `INSERT INTO optout (
          user_email, user_name, user_phone, user_ip,
          email_property_updates, email_market_insights, email_home_improvement, email_promotional_offers,
          sms_property_alerts, sms_appointment_reminders,
          push_browser_notifications, push_mobile_notifications,
          analytics_website_analytics, analytics_personalized_recommendations,
          third_party_partner_recommendations, third_party_advertising_networks,
          cookies_analytics, cookies_marketing
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          userInfo.email,
          userInfo.name,
          userInfo.phone || null,
          ip,
          preferences.email.propertyUpdates,
          preferences.email.marketInsights,
          preferences.email.homeImprovement,
          preferences.email.promotionalOffers,
          preferences.sms.propertyAlerts,
          preferences.sms.appointmentReminders,
          preferences.push.browserNotifications,
          preferences.push.mobileNotifications,
          preferences.analytics.websiteAnalytics,
          preferences.analytics.personalizedRecommendations,
          preferences.thirdParty.partnerRecommendations,
          preferences.thirdParty.advertisingNetworks,
          preferences.cookies.analytics,
          preferences.cookies.marketing
        ]
      );
    }

    // Get the updated/inserted data
    const userRows = await connection.query(
      'SELECT * FROM optout WHERE user_email = ?',
      [userInfo.email]
    );

    return NextResponse.json({
      success: true,
      message: 'Preferences updated successfully',
      data: {
        userInfo: {
          name: userRows[0].user_name,
          email: userRows[0].user_email,
          phone: userRows[0].user_phone
        },
        preferences: {
          email: {
            propertyUpdates: userRows[0].email_property_updates,
            marketInsights: userRows[0].email_market_insights,
            homeImprovement: userRows[0].email_home_improvement,
            promotionalOffers: userRows[0].email_promotional_offers
          },
          sms: {
            propertyAlerts: userRows[0].sms_property_alerts,
            appointmentReminders: userRows[0].sms_appointment_reminders
          },
          push: {
            browserNotifications: userRows[0].push_browser_notifications,
            mobileNotifications: userRows[0].push_mobile_notifications
          },
          analytics: {
            websiteAnalytics: userRows[0].analytics_website_analytics,
            personalizedRecommendations: userRows[0].analytics_personalized_recommendations
          },
          thirdParty: {
            partnerRecommendations: userRows[0].third_party_partner_recommendations,
            advertisingNetworks: userRows[0].third_party_advertising_networks
          },
          cookies: {
            analytics: userRows[0].cookies_analytics,
            marketing: userRows[0].cookies_marketing
          }
        }
      }
    });

  } catch (error) {
    console.error('Error updating opt-out preferences:', error);
    return NextResponse.json(
      { error: 'Failed to update preferences' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

export async function GET(request: NextRequest) {
  let connection;
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    connection = await pool.getConnection();

    // Get user data from database
    const rows = await connection.query(
      'SELECT * FROM optout WHERE user_email = ?',
      [email]
    );

    if (!rows || rows.length === 0) {
      // Return default preferences if user doesn't exist
      const defaultPreferences = {
        email: {
          propertyUpdates: false,
          marketInsights: false,
          homeImprovement: false,
          promotionalOffers: false
        },
        sms: {
          propertyAlerts: false,
          appointmentReminders: false
        },
        push: {
          browserNotifications: false,
          mobileNotifications: false
        },
        analytics: {
          websiteAnalytics: false,
          personalizedRecommendations: false
        },
        thirdParty: {
          partnerRecommendations: false,
          advertisingNetworks: false
        },
        cookies: {
          analytics: false,
          marketing: false
        }
      };

      return NextResponse.json({
        success: true,
        data: {
          userInfo: null,
          preferences: defaultPreferences
        }
      });
    }

    const user = rows[0];

    return NextResponse.json({
      success: true,
      data: {
        userInfo: {
          name: user.user_name,
          email: user.user_email,
          phone: user.user_phone
        },
        preferences: {
          email: {
            propertyUpdates: user.email_property_updates,
            marketInsights: user.email_market_insights,
            homeImprovement: user.email_home_improvement,
            promotionalOffers: user.email_promotional_offers
          },
          sms: {
            propertyAlerts: user.sms_property_alerts,
            appointmentReminders: user.sms_appointment_reminders
          },
          push: {
            browserNotifications: user.push_browser_notifications,
            mobileNotifications: user.push_mobile_notifications
          },
          analytics: {
            websiteAnalytics: user.analytics_website_analytics,
            personalizedRecommendations: user.analytics_personalized_recommendations
          },
          thirdParty: {
            partnerRecommendations: user.third_party_partner_recommendations,
            advertisingNetworks: user.third_party_advertising_networks
          },
          cookies: {
            analytics: user.cookies_analytics,
            marketing: user.cookies_marketing
          }
        }
      }
    });

  } catch (error) {
    console.error('Error fetching opt-out preferences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch preferences' },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
} 