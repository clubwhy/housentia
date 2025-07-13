-- Create optout table for user privacy preferences
CREATE TABLE IF NOT EXISTS optout (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_name VARCHAR(255) NOT NULL,
  user_phone VARCHAR(50),
  user_ip VARCHAR(50),
  
  -- Email preferences
  email_property_updates BOOLEAN DEFAULT FALSE,
  email_market_insights BOOLEAN DEFAULT FALSE,
  email_home_improvement BOOLEAN DEFAULT FALSE,
  email_promotional_offers BOOLEAN DEFAULT FALSE,
  
  -- SMS preferences
  sms_property_alerts BOOLEAN DEFAULT FALSE,
  sms_appointment_reminders BOOLEAN DEFAULT FALSE,
  
  -- Push notification preferences
  push_browser_notifications BOOLEAN DEFAULT FALSE,
  push_mobile_notifications BOOLEAN DEFAULT FALSE,
  
  -- Analytics preferences
  analytics_website_analytics BOOLEAN DEFAULT FALSE,
  analytics_personalized_recommendations BOOLEAN DEFAULT FALSE,
  
  -- Third-party data sharing preferences
  third_party_partner_recommendations BOOLEAN DEFAULT FALSE,
  third_party_advertising_networks BOOLEAN DEFAULT FALSE,
  
  -- Cookie preferences
  cookies_analytics BOOLEAN DEFAULT FALSE,
  cookies_marketing BOOLEAN DEFAULT FALSE,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Indexes
  INDEX idx_user_email (user_email),
  INDEX idx_created_at (created_at)
); 