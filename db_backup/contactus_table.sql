-- Create contactus table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contactus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_reason VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add index for email for faster lookups
CREATE INDEX idx_contactus_email ON contactus(email);

-- Add index for created_at for date-based queries
CREATE INDEX idx_contactus_created_at ON contactus(created_at); 