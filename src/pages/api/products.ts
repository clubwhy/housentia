import { NextApiRequest, NextApiResponse } from 'next';
const pool = require('../../app/upgrade/contractor-finder/db');

const PAGE_SIZE = 12;

// Whitelist of allowed sort values
const ALLOWED_SORTS = ['newest', 'oldest', 'name', 'name-desc', 'price', 'price-desc'] as const;
type SortType = typeof ALLOWED_SORTS[number];

// Map sort values to safe SQL ORDER BY clauses
const SORT_MAP: Record<SortType, string> = {
  'newest': 'p.uid DESC',
  'oldest': 'p.uid ASC',
  'name': 'p.name ASC',
  'name-desc': 'p.name DESC',
  'price': 'p.retail_price ASC',
  'price-desc': 'p.retail_price DESC'
};

/**
 * Validate and sanitize category input
 */
function validateCategory(category: string | string[] | undefined): string | null {
  if (!category || Array.isArray(category)) {
    return null;
  }
  
  // Only allow alphanumeric, spaces, hyphens, and underscores
  const categoryPattern = /^[a-zA-Z0-9\s\-_]{1,50}$/;
  if (!categoryPattern.test(category)) {
    return null;
  }
  
  return category.trim();
}

/**
 * Validate page number
 */
function validatePage(page: string | string[] | undefined): number {
  if (Array.isArray(page)) {
    return 1;
  }
  
  const pageNum = parseInt(page || '1', 10);
  if (isNaN(pageNum) || pageNum < 1 || pageNum > 1000) {
    return 1;
  }
  
  return pageNum;
}

/**
 * Validate sort parameter
 */
function validateSort(sort: string | string[] | undefined): SortType {
  if (Array.isArray(sort)) {
    return 'newest';
  }
  
  if (sort && ALLOWED_SORTS.includes(sort as SortType)) {
    return sort as SortType;
  }
  
  return 'newest';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Validate and sanitize inputs
    const category = validateCategory(req.query.category);
    const sort = validateSort(req.query.sort);
    const page = validatePage(req.query.page);
    const offset = (page - 1) * PAGE_SIZE;

    // Build safe parameterized query
    const params: any[] = [];
    let whereClause = 'WHERE p.active = 1';
    
    if (category) {
      whereClause += ' AND t.label = ?';
      params.push(category);
    }
    
    // Get safe ORDER BY clause from whitelist
    const orderClause = `ORDER BY ${SORT_MAP[sort]}`;
    
    // Add LIMIT and OFFSET as parameters
    params.push(PAGE_SIZE, offset);

    const connection = await pool.getConnection();
    try {
      // Execute parameterized query (no string concatenation for SQL structure)
      const [rows] = await connection.execute(`
        SELECT 
          p.uid AS id,
          p.name,
          p.description,
          p.retail_price AS price,
          p.image_url,
          p.product_url,
          t.label AS category,
          v.company AS vendor_name
        FROM products p
        JOIN types t ON p.type_uid = t.uid
        JOIN vendors v ON p.vendor_uid = v.uid
        ${whereClause}
        ${orderClause}
        LIMIT ? OFFSET ?
      `, params);
      
      const products = Array.isArray(rows) ? rows : [];

      // Get total count with parameterized query
      const countParams = category ? [category] : [];
      const countWhere = category ? ' AND t.label = ?' : '';
      const [countRows] = await connection.execute(
        `SELECT COUNT(*) as count 
         FROM products p 
         JOIN types t ON p.type_uid = t.uid 
         WHERE p.active = 1${countWhere}`,
        countParams
      );
      const count = countRows[0]?.count ?? 0;

      // Get categories (safe query, no user input)
      const [categoriesRows] = await connection.execute(`
        SELECT DISTINCT t.label as code, t.label as label
        FROM products p
        JOIN types t ON p.type_uid = t.uid
        WHERE p.active = 1 AND t.label IS NOT NULL AND t.label != ''
        ORDER BY t.label
      `);
      const categories = Array.isArray(categoriesRows) ? categoriesRows : [];

      res.status(200).json({
        products,
        count: Number(count),
        categories,
        totalPages: Math.ceil(Number(count) / PAGE_SIZE)
      });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error('[PRODUCTS API ERROR]', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 