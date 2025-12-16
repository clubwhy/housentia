import { NextRequest, NextResponse } from 'next/server';

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  message?: string; // Custom error message
}

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
// In production, consider using Redis for distributed systems
const rateLimitStore = new Map<string, RateLimitRecord>();

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Get client identifier (IP address)
 */
function getClientId(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0]?.trim() || realIp || 'unknown';
  return ip;
}

/**
 * Create rate limit key
 */
function getRateLimitKey(req: NextRequest, config?: { prefix?: string }): string {
  const clientId = getClientId(req);
  const pathname = req.nextUrl.pathname;
  const prefix = config?.prefix || 'ratelimit';
  return `${prefix}:${clientId}:${pathname}`;
}

/**
 * Rate limit middleware function
 */
export function rateLimit(config: RateLimitConfig) {
  return async (req: NextRequest): Promise<NextResponse | null> => {
    const key = getRateLimitKey(req);
    const now = Date.now();
    const record = rateLimitStore.get(key);

    // Initialize or reset if window expired
    if (!record || now > record.resetTime) {
      rateLimitStore.set(key, {
        count: 1,
        resetTime: now + config.windowMs
      });
      return null; // Allow request
    }

    // Check if limit exceeded
    if (record.count >= config.maxRequests) {
      const retryAfter = Math.ceil((record.resetTime - now) / 1000);
      return NextResponse.json(
        { 
          error: config.message || 'Too many requests. Please try again later.',
          retryAfter 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(config.maxRequests),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(record.resetTime / 1000))
          }
        }
      );
    }

    // Increment counter
    record.count++;
    return null; // Allow request
  };
}

/**
 * Pre-configured rate limiters for common use cases
 */
export const rateLimiters = {
  // Strict rate limit for login (5 requests per 15 minutes)
  login: rateLimit({
    windowMs: 15 * 60 * 1000,
    maxRequests: 5,
    message: 'Too many login attempts. Please try again later.'
  }),
  
  // Moderate rate limit for signup (3 requests per hour)
  signup: rateLimit({
    windowMs: 60 * 60 * 1000,
    maxRequests: 3,
    message: 'Too many signup attempts. Please try again later.'
  }),
  
  // Password reset (3 requests per hour)
  passwordReset: rateLimit({
    windowMs: 60 * 60 * 1000,
    maxRequests: 3,
    message: 'Too many password reset requests. Please try again later.'
  }),
  
  // General API (100 requests per minute)
  general: rateLimit({
    windowMs: 60 * 1000,
    maxRequests: 100,
    message: 'Too many requests. Please slow down.'
  }),
  
  // Contact form (5 requests per hour)
  contact: rateLimit({
    windowMs: 60 * 60 * 1000,
    maxRequests: 5,
    message: 'Too many contact form submissions. Please try again later.'
  }),
  
  // Chat/Gemini API (20 requests per minute)
  chat: rateLimit({
    windowMs: 60 * 1000,
    maxRequests: 20,
    message: 'Too many chat requests. Please slow down.'
  })
};


