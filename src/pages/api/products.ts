import { NextApiRequest, NextApiResponse } from 'next';
const pool = require('../../app/upgrade/contractor-finder/db');

const PAGE_SIZE = 12;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { category = '', sort = 'newest', page = '1' } = req.query;
    const pageNum = parseInt(page as string, 10);
    const offset = (pageNum - 1) * PAGE_SIZE;

    let whereClause = 'WHERE p.active = 1';
    let params: any[] = [];

    if (category) {
      whereClause += ' AND t.label = ?';
      params.push(category);
    }
    // Always add LIMIT and OFFSET at the end
    params.push(PAGE_SIZE, offset);

    let orderClause = 'ORDER BY p.uid DESC';
    switch (sort) {
      case 'oldest':
        orderClause = 'ORDER BY p.uid ASC';
        break;
      case 'name':
        orderClause = 'ORDER BY p.name ASC';
        break;
      case 'name-desc':
        orderClause = 'ORDER BY p.name DESC';
        break;
      case 'price':
        orderClause = 'ORDER BY p.retail_price ASC';
        break;
      case 'price-desc':
        orderClause = 'ORDER BY p.retail_price DESC';
        break;
    }

    const connection = await pool.getConnection();
    try {
      // Debug log for SQL and params
      console.log('상품 쿼리:', `\n  SELECT \n    p.uid AS id,\n    p.name,\n    p.description,\n    p.retail_price AS price,\n    p.image_url,\n    p.product_url,\n    t.label AS category,\n    v.company AS vendor_name\n  FROM products p\n  JOIN types t ON p.type_uid = t.uid\n  JOIN vendors v ON p.vendor_uid = v.uid\n  ${whereClause}\n  ${orderClause}\n  LIMIT ? OFFSET ?\n`, params);

      // Get products with correct mapping
      const [rows, fields] = await connection.execute(`
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
      console.log('rows:', rows);
      let products = Array.isArray(rows) ? rows : [];

      // Get total count
      const [countRows] = await connection.execute(
        `SELECT COUNT(*) as count FROM products p JOIN types t ON p.type_uid = t.uid WHERE p.active = 1${category ? ' AND t.label = ?' : ''}`,
        category ? [category] : []
      );
      const count = countRows[0]?.count ?? 0;

      // Get categories
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
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 