import { NextResponse } from 'next/server';

/**
 * Generic error handler that prevents information disclosure
 */
export function handleError(error: unknown, context?: string): NextResponse {
  // Log full error details server-side (for debugging)
  if (error instanceof Error) {
    console.error(`[ERROR${context ? ` ${context}` : ''}]`, {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
  } else {
    console.error(`[ERROR${context ? ` ${context}` : ''}]`, error);
  }
  
  // Return generic error message to client (no sensitive information)
  return NextResponse.json(
    { 
      error: 'An error occurred. Please try again later.',
      // In development, include more details
      ...(process.env.NODE_ENV === 'development' && error instanceof Error
        ? { devMessage: error.message }
        : {})
    },
    { status: 500 }
  );
}

/**
 * Handle database errors specifically
 */
export function handleDatabaseError(error: unknown): NextResponse {
  if (error instanceof Error) {
    // Check for specific database error types
    if (error.message.includes('ER_DUP_ENTRY')) {
      return NextResponse.json(
        { error: 'This record already exists.' },
        { status: 409 }
      );
    }
    
    if (error.message.includes('ER_NO_SUCH_TABLE')) {
      console.error('[DATABASE ERROR] Table does not exist:', error.message);
      return NextResponse.json(
        { error: 'Database configuration error. Please contact support.' },
        { status: 500 }
      );
    }
    
    if (error.message.includes('connection')) {
      console.error('[DATABASE ERROR] Connection failed:', error.message);
      return NextResponse.json(
        { error: 'Database connection failed. Please try again later.' },
        { status: 503 }
      );
    }
  }
  
  return handleError(error, 'DATABASE');
}

/**
 * Handle validation errors
 */
export function handleValidationError(message: string): NextResponse {
  return NextResponse.json(
    { error: message },
    { status: 400 }
  );
}

/**
 * Handle authentication errors
 */
export function handleAuthError(message: string = 'Authentication required'): NextResponse {
  return NextResponse.json(
    { error: message },
    { status: 401 }
  );
}

/**
 * Handle authorization errors
 */
export function handleAuthorizationError(message: string = 'Access denied'): NextResponse {
  return NextResponse.json(
    { error: message },
    { status: 403 }
  );
}


