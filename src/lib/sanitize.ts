import validator from 'validator';

/**
 * Sanitize HTML content (remove all HTML tags)
 */
export function sanitizeHtml(html: string): string {
  // Remove all HTML tags and decode entities
  return validator.escape(html)
    .replace(/<[^>]*>/g, '')
    .trim();
}

/**
 * Sanitize plain text input
 */
export function sanitizeText(text: string, maxLength: number = 1000): string {
  if (typeof text !== 'string') {
    return '';
  }
  
  const trimmed = text.trim().substring(0, maxLength);
  // Escape HTML entities
  return validator.escape(trimmed);
}

/**
 * Sanitize email address
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== 'string') {
    return '';
  }
  
  const trimmed = email.trim().toLowerCase();
  // Basic email validation and sanitization
  if (!validator.isEmail(trimmed)) {
    throw new Error('Invalid email format');
  }
  
  return trimmed;
}

/**
 * Sanitize name (alphanumeric, spaces, hyphens, apostrophes)
 */
export function sanitizeName(name: string, maxLength: number = 100): string {
  if (typeof name !== 'string') {
    return '';
  }
  
  const trimmed = name.trim().substring(0, maxLength);
  // Allow letters, numbers, spaces, hyphens, apostrophes
  const namePattern = /^[a-zA-Z0-9\s\-']+$/;
  if (!namePattern.test(trimmed)) {
    throw new Error('Name contains invalid characters');
  }
  
  return validator.escape(trimmed);
}

/**
 * Sanitize phone number
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== 'string') {
    return '';
  }
  
  // Remove all non-digit characters except +, -, spaces, parentheses
  const cleaned = phone.replace(/[^\d+\-()\s]/g, '');
  
  // Basic validation
  if (cleaned.length < 10 || cleaned.length > 20) {
    throw new Error('Invalid phone number length');
  }
  
  return cleaned.trim();
}

/**
 * Sanitize zipcode
 */
export function sanitizeZipcode(zipcode: string): string {
  if (typeof zipcode !== 'string') {
    return '';
  }
  
  const trimmed = zipcode.trim();
  // US zipcode validation (5 digits or 5+4 format)
  if (!validator.isPostalCode(trimmed, 'US')) {
    throw new Error('Invalid zipcode format');
  }
  
  return trimmed;
}


