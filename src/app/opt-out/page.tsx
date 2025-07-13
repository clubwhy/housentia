"use client";
import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';

interface UserInfo {
  name: string;
  email: string;
  phone?: string;
}

interface OptOutPreferences {
  email: {
    propertyUpdates: boolean;
    marketInsights: boolean;
    homeImprovement: boolean;
    promotionalOffers: boolean;
  };
  sms: {
    propertyAlerts: boolean;
    appointmentReminders: boolean;
  };
  push: {
    browserNotifications: boolean;
    mobileNotifications: boolean;
  };
  analytics: {
    websiteAnalytics: boolean;
    personalizedRecommendations: boolean;
  };
  thirdParty: {
    partnerRecommendations: boolean;
    advertisingNetworks: boolean;
  };
  cookies: {
    analytics: boolean;
    marketing: boolean;
  };
}

export default function OptOut() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  });

  const [preferences, setPreferences] = useState<OptOutPreferences>({
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
  });

  const [loading, setLoading] = useState<{[key: string]: boolean}>({});
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [isUserIdentified, setIsUserIdentified] = useState(false);

  useEffect(() => {
    // Check if user info exists in localStorage
    const savedUserInfo = localStorage.getItem('optOutUserInfo');
    if (savedUserInfo) {
      const parsed = JSON.parse(savedUserInfo);
      setUserInfo(parsed);
      setIsUserIdentified(true);
      loadPreferences(parsed.email);
    }
  }, []);

  const loadPreferences = async (email: string) => {
    try {
      const response = await fetch(`/api/opt-out?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      if (data.success && data.data.preferences) {
        setPreferences(data.data.preferences);
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
    }
  };

  const updatePreference = async (category: string, key: string, value: boolean) => {
    if (!isUserIdentified) {
      setMessage({
        type: 'error',
        text: 'Please provide your information first'
      });
      return;
    }

    const loadingKey = `${category}-${key}`;
    setLoading(prev => ({ ...prev, [loadingKey]: true }));
    setMessage(null);

    try {
      const updatedPreferences = {
        ...preferences,
        [category]: {
          ...preferences[category as keyof OptOutPreferences],
          [key]: value
        }
      };

      const response = await fetch('/api/opt-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          preferences: updatedPreferences
        })
      });

      const data = await response.json();

      if (data.success) {
        setPreferences(updatedPreferences);
        setMessage({
          type: 'success',
          text: value ? 'Successfully opted out' : 'Successfully opted in'
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Failed to update preference:', error);
      setMessage({
        type: 'error',
        text: 'Failed to update preference. Please try again.'
      });
    } finally {
      setLoading(prev => ({ ...prev, [loadingKey]: false }));
    }
  };

  const bulkOptOut = async (type: 'marketing' | 'data' | 'all') => {
    if (!isUserIdentified) {
      setMessage({
        type: 'error',
        text: 'Please provide your information first'
      });
      return;
    }

    setLoading(prev => ({ ...prev, [type]: true }));
    setMessage(null);

    try {
      let updatedPreferences = { ...preferences };

      if (type === 'marketing') {
        // Opt out of all marketing communications
        updatedPreferences = {
          ...preferences,
          email: {
            propertyUpdates: true,
            marketInsights: true,
            homeImprovement: true,
            promotionalOffers: true
          },
          sms: {
            propertyAlerts: true,
            appointmentReminders: true
          },
          push: {
            browserNotifications: true,
            mobileNotifications: true
          }
        };
      } else if (type === 'data') {
        // Opt out of all data collection
        updatedPreferences = {
          ...preferences,
          analytics: {
            websiteAnalytics: true,
            personalizedRecommendations: true
          },
          thirdParty: {
            partnerRecommendations: true,
            advertisingNetworks: true
          },
          cookies: {
            analytics: true,
            marketing: true
          }
        };
      } else if (type === 'all') {
        // Opt out of everything
        updatedPreferences = {
          email: {
            propertyUpdates: true,
            marketInsights: true,
            homeImprovement: true,
            promotionalOffers: true
          },
          sms: {
            propertyAlerts: true,
            appointmentReminders: true
          },
          push: {
            browserNotifications: true,
            mobileNotifications: true
          },
          analytics: {
            websiteAnalytics: true,
            personalizedRecommendations: true
          },
          thirdParty: {
            partnerRecommendations: true,
            advertisingNetworks: true
          },
          cookies: {
            analytics: true,
            marketing: true
          }
        };
      }

      const response = await fetch('/api/opt-out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userInfo,
          preferences: updatedPreferences
        })
      });

      const data = await response.json();

      if (data.success) {
        await loadPreferences(userInfo.email);
        setMessage({
          type: 'success',
          text: `Successfully opted out of ${type === 'all' ? 'all communications and data collection' : type === 'marketing' ? 'all marketing communications' : 'all data collection'}`
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Failed to bulk opt-out:', error);
      setMessage({
        type: 'error',
        text: 'Failed to update preferences. Please try again.'
      });
    } finally {
      setLoading(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleUserInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, 'userInfo': true }));
    setMessage(null);

    try {
      // Save user info to localStorage
      localStorage.setItem('optOutUserInfo', JSON.stringify(userInfo));
      setIsUserIdentified(true);
      
      // Load existing preferences for this user
      await loadPreferences(userInfo.email);
      
      setMessage({
        type: 'success',
        text: 'Your information has been saved. You can now manage your preferences.'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to save your information. Please try again.'
      });
    } finally {
      setLoading(prev => ({ ...prev, 'userInfo': false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero 
        title="Opt-Out Preferences"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Your Privacy Preferences</h2>
            
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>

            {message && (
              <div className={`p-4 rounded-lg mb-6 ${
                message.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                {message.text}
              </div>
            )}

            {!isUserIdentified && (
              <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">Please Provide Your Information</h3>
                <p className="text-yellow-800 mb-4">
                  To manage your privacy preferences, we need to know who you are. Please provide your information below.
                </p>
                <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-yellow-900 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-yellow-900 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={userInfo.email}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-yellow-900 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading['userInfo']}
                    className={`px-6 py-3 rounded-md font-medium transition-colors ${
                      loading['userInfo'] ? 'bg-yellow-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'
                    } text-white`}
                  >
                    {loading['userInfo'] ? 'Saving...' : 'Save Information'}
                  </button>
                </form>
              </section>
            )}

            {isUserIdentified && (
              <section className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-900">Welcome, {userInfo.name}!</h3>
                    <p className="text-green-700 text-sm">You can now manage your privacy preferences below.</p>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.removeItem('optOutUserInfo');
                      setIsUserIdentified(false);
                      setUserInfo({ name: '', email: '', phone: '' });
                    }}
                    className="text-green-700 hover:text-green-900 text-sm underline"
                  >
                    Change User
                  </button>
                </div>
              </section>
            )}

            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Privacy Choices</h3>
                <p className="text-gray-700 mb-4">
                  At Housentia, we respect your privacy and give you control over how your information is used. This page allows you to manage your preferences for data collection, marketing communications, and other privacy-related settings.
                </p>
                <p className="text-gray-700">
                  You can opt out of various types of communications and data collection at any time. Your preferences will be updated immediately, though it may take up to 30 days for changes to take full effect across all systems.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Communications</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-medium text-blue-900 mb-3">Email Communications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-800 font-medium">Property Updates & New Listings</p>
                        <p className="text-blue-700 text-sm">Receive notifications about new properties matching your criteria</p>
                      </div>
                      <button 
                        onClick={() => updatePreference('email', 'propertyUpdates', !preferences.email.propertyUpdates)}
                        disabled={loading['email-propertyUpdates']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.email.propertyUpdates
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        } ${loading['email-propertyUpdates'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['email-propertyUpdates'] ? 'Updating...' : preferences.email.propertyUpdates ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-800 font-medium">Market Insights & Trends</p>
                        <p className="text-blue-700 text-sm">Get updates about real estate market conditions and trends</p>
                      </div>
                      <button 
                        onClick={() => updatePreference('email', 'marketInsights', !preferences.email.marketInsights)}
                        disabled={loading['email-marketInsights']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.email.marketInsights
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        } ${loading['email-marketInsights'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['email-marketInsights'] ? 'Updating...' : preferences.email.marketInsights ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-800 font-medium">Home Improvement Tips</p>
                        <p className="text-blue-700 text-sm">Receive DIY guides and home improvement advice</p>
                      </div>
                      <button 
                        onClick={() => updatePreference('email', 'homeImprovement', !preferences.email.homeImprovement)}
                        disabled={loading['email-homeImprovement']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.email.homeImprovement
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        } ${loading['email-homeImprovement'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['email-homeImprovement'] ? 'Updating...' : preferences.email.homeImprovement ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-800 font-medium">Promotional Offers</p>
                        <p className="text-blue-700 text-sm">Receive special offers and discounts from our partners</p>
                      </div>
                      <button 
                        onClick={() => updatePreference('email', 'promotionalOffers', !preferences.email.promotionalOffers)}
                        disabled={loading['email-promotionalOffers']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.email.promotionalOffers
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        } ${loading['email-promotionalOffers'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['email-promotionalOffers'] ? 'Updating...' : preferences.email.promotionalOffers ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-medium text-green-900 mb-3">SMS/Text Messages</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-800 font-medium">Property Alerts</p>
                        <p className="text-green-700 text-sm">Receive instant notifications about new properties via text</p>
                      </div>
                      <button
                        onClick={() => updatePreference('sms', 'propertyAlerts', !preferences.sms.propertyAlerts)}
                        disabled={loading['sms-propertyAlerts']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.sms.propertyAlerts
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                        } ${loading['sms-propertyAlerts'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['sms-propertyAlerts'] ? 'Updating...' : preferences.sms.propertyAlerts ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-800 font-medium">Appointment Reminders</p>
                        <p className="text-green-700 text-sm">Get reminders about scheduled property viewings</p>
                      </div>
                      <button
                        onClick={() => updatePreference('sms', 'appointmentReminders', !preferences.sms.appointmentReminders)}
                        disabled={loading['sms-appointmentReminders']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.sms.appointmentReminders
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-green-500 hover:bg-green-600 text-white'
                        } ${loading['sms-appointmentReminders'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['sms-appointmentReminders'] ? 'Updating...' : preferences.sms.appointmentReminders ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-purple-900 mb-3">Push Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-800 font-medium">Browser Notifications</p>
                        <p className="text-purple-700 text-sm">Receive notifications in your web browser</p>
                      </div>
                      <button
                        onClick={() => updatePreference('push', 'browserNotifications', !preferences.push.browserNotifications)}
                        disabled={loading['push-browserNotifications']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.push.browserNotifications
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-purple-500 hover:bg-purple-600 text-white'
                        } ${loading['push-browserNotifications'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['push-browserNotifications'] ? 'Updating...' : preferences.push.browserNotifications ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-800 font-medium">Mobile App Notifications</p>
                        <p className="text-purple-700 text-sm">Receive notifications through our mobile app</p>
                      </div>
                      <button
                        onClick={() => updatePreference('push', 'mobileNotifications', !preferences.push.mobileNotifications)}
                        disabled={loading['push-mobileNotifications']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.push.mobileNotifications
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-purple-500 hover:bg-purple-600 text-white'
                        } ${loading['push-mobileNotifications'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['push-mobileNotifications'] ? 'Updating...' : preferences.push.mobileNotifications ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection Preferences</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                  <h4 className="text-lg font-medium text-yellow-900 mb-3">Analytics & Tracking</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-800 font-medium">Website Analytics</p>
                        <p className="text-yellow-700 text-sm">Allow us to collect anonymous usage data to improve our services</p>
                      </div>
                      <button
                        onClick={() => updatePreference('analytics', 'websiteAnalytics', !preferences.analytics.websiteAnalytics)}
                        disabled={loading['analytics-websiteAnalytics']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.analytics.websiteAnalytics
                            ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        } ${loading['analytics-websiteAnalytics'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['analytics-websiteAnalytics'] ? 'Updating...' : preferences.analytics.websiteAnalytics ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-800 font-medium">Personalized Recommendations</p>
                        <p className="text-yellow-700 text-sm">Allow us to use your data to provide personalized property suggestions</p>
                      </div>
                      <button
                        onClick={() => updatePreference('analytics', 'personalizedRecommendations', !preferences.analytics.personalizedRecommendations)}
                        disabled={loading['analytics-personalizedRecommendations']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.analytics.personalizedRecommendations
                            ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                            : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                        } ${loading['analytics-personalizedRecommendations'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['analytics-personalizedRecommendations'] ? 'Updating...' : preferences.analytics.personalizedRecommendations ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h4 className="text-lg font-medium text-red-900 mb-3">Third-Party Data Sharing</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-red-800 font-medium">Partner Recommendations</p>
                        <p className="text-red-700 text-sm">Allow us to share your information with trusted real estate partners</p>
                      </div>
                      <button
                        onClick={() => updatePreference('thirdParty', 'partnerRecommendations', !preferences.thirdParty.partnerRecommendations)}
                        disabled={loading['thirdParty-partnerRecommendations']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.thirdParty.partnerRecommendations
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        } ${loading['thirdParty-partnerRecommendations'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['thirdParty-partnerRecommendations'] ? 'Updating...' : preferences.thirdParty.partnerRecommendations ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-red-800 font-medium">Advertising Networks</p>
                        <p className="text-red-700 text-sm">Allow third-party advertising networks to use your data for targeted ads</p>
                      </div>
                      <button
                        onClick={() => updatePreference('thirdParty', 'advertisingNetworks', !preferences.thirdParty.advertisingNetworks)}
                        disabled={loading['thirdParty-advertisingNetworks']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.thirdParty.advertisingNetworks
                            ? 'bg-red-600 hover:bg-red-700 text-white'
                            : 'bg-red-500 hover:bg-red-600 text-white'
                        } ${loading['thirdParty-advertisingNetworks'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['thirdParty-advertisingNetworks'] ? 'Updating...' : preferences.thirdParty.advertisingNetworks ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bulk Opt-Out Options</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">Opt Out of All Marketing Communications</p>
                        <p className="text-gray-600 text-sm">Stop receiving all marketing emails, SMS, and push notifications</p>
                      </div>
                      <button
                        onClick={() => bulkOptOut('marketing')}
                        disabled={loading['marketing']}
                        className={`px-6 py-3 rounded-md font-medium transition-colors ${
                          loading['marketing'] ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700'
                        } text-white`}
                      >
                        {loading['marketing'] ? 'Updating...' : 'Opt Out of All'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">Opt Out of All Data Collection</p>
                        <p className="text-gray-600 text-sm">Stop all data collection except what's necessary for basic service functionality</p>
                      </div>
                      <button
                        onClick={() => bulkOptOut('data')}
                        disabled={loading['data']}
                        className={`px-6 py-3 rounded-md font-medium transition-colors ${
                          loading['data'] ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700'
                        } text-white`}
                      >
                        {loading['data'] ? 'Updating...' : 'Opt Out of All'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-800 font-medium">Delete My Account</p>
                        <p className="text-gray-600 text-sm">Permanently delete your account and all associated data</p>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Preferences</h3>
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <p className="text-indigo-800 mb-4">
                    Manage your cookie preferences to control how we and our partners use cookies and similar technologies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-indigo-800 font-medium">Essential Cookies</p>
                        <p className="text-indigo-700 text-sm">Required for basic website functionality (always enabled)</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Always Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-indigo-800 font-medium">Analytics Cookies</p>
                        <p className="text-indigo-700 text-sm">Help us understand how visitors interact with our website</p>
                      </div>
                      <button
                        onClick={() => updatePreference('cookies', 'analytics', !preferences.cookies.analytics)}
                        disabled={loading['cookies-analytics']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.cookies.analytics
                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                        } ${loading['cookies-analytics'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['cookies-analytics'] ? 'Updating...' : preferences.cookies.analytics ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-indigo-800 font-medium">Marketing Cookies</p>
                        <p className="text-indigo-700 text-sm">Used for targeted advertising and marketing campaigns</p>
                      </div>
                      <button
                        onClick={() => updatePreference('cookies', 'marketing', !preferences.cookies.marketing)}
                        disabled={loading['cookies-marketing']}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          preferences.cookies.marketing
                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                            : 'bg-indigo-500 hover:bg-indigo-600 text-white'
                        } ${loading['cookies-marketing'] ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading['cookies-marketing'] ? 'Updating...' : preferences.cookies.marketing ? 'Opted Out' : 'Opt Out'}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <p className="text-teal-800 mb-4">
                    Under various privacy laws, you have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-teal-700 space-y-2">
                    <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
                    <li><strong>Right to Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Right to Object:</strong> Object to processing of your personal information</li>
                    <li><strong>Right to Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <div className="mt-4">
                    <button
                      onClick={() => window.location.href = 'mailto:info@housentia.com?subject=Privacy Rights Request&body=Please describe your request (access, correction, deletion, etc.) and provide your contact information.'}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                    >
                      Exercise Your Rights
                    </button>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about your privacy preferences or need help managing your settings, please contact our privacy team:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700">
                        <strong>Email:</strong><br />
                        info@housentia.com
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong><br />
                        We typically respond within 48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Notes</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <ul className="list-disc list-inside text-orange-800 space-y-2">
                    <li>Opting out of certain communications may limit your access to some features and services</li>
                    <li>Some communications are necessary for account security and cannot be opted out of</li>
                    <li>Changes to your preferences may take up to 30 days to take full effect</li>
                    <li>You can change your preferences at any time by returning to this page</li>
                    <li>Deleting your account is permanent and cannot be undone</li>
                    <li>We may still contact you regarding important account-related matters</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 