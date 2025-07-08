import Image from 'next/image';
import Link from 'next/link';
const pool = require('../../upgrade/contractor-finder/db');
import ProductFilters from './ProductFilters.client';
import Pagination from './Pagination.client';
import ProductImage from './ProductImage.client';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  product_url: string;
  category: string;
  vendor_name: string;
}

interface Category {
  code: string;
  label: string;
}

export default async function ProductsPage({ searchParams, params }: { searchParams: any, params?: { category?: string } }) {
  const urlParams = await searchParams;
  let category = '';
  let sort = 'newest';
  let page = 1;
  if (urlParams && typeof urlParams.get === 'function') {
    category = urlParams.get('category') || '';
    sort = urlParams.get('sort') || 'newest';
    page = parseInt(urlParams.get('page') || '1', 10);
  } else if (urlParams && typeof urlParams === 'object') {
    category = urlParams.category || '';
    sort = urlParams.sort || 'newest';
    page = parseInt(urlParams.page || '1', 10);
  }
  // If /shop/[category] route, override category filter
  if (params && params.category) {
    // Map route param to display label if needed
    // Example: /shop/trending -> 'Trending Products'
    const categoryMap: Record<string, string> = {
      trending: 'Trending Products',
      'interior-accessories': 'Interior Accessories',
      'diy-kits': 'DIY Kits & Tools',
      gardening: 'Gardening Essentials',
      'gift-ideas': 'Gift Ideas',
      'affiliate-product': 'Affiliate Product',
      'drop-shipping-product': 'Drop-Shipping Product',
      'solar-installer': 'Solar Installer',
    };
    category = categoryMap[params.category] || params.category;
  }
  const PAGE_SIZE = 12;
  const offset = (page - 1) * PAGE_SIZE;

  let whereClause = 'WHERE p.active = 1';
  let dbParams: any[] = [];
  if (category) {
    whereClause += ' AND t.label = ?';
    dbParams.push(category);
  }
  dbParams.push(PAGE_SIZE, offset);

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

  // Debug: Print the final SQL query and params
  console.log('[ProductsPage] category:', category, 'sort:', sort, 'page:', page);
  console.log('[ProductsPage] SQL:', `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, t.label AS category, v.company AS vendor_name FROM products p JOIN types t ON p.type_uid = t.uid JOIN vendors v ON p.vendor_uid = v.uid ${whereClause} ${orderClause} LIMIT ? OFFSET ?`, dbParams);

  const conn = await pool.getConnection();
  let products: Product[] = [];
  let categories: Category[] = [];
  let count = 0;
  try {
    // 상품 목록
    products = await conn.query(
      `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, t.label AS category, v.company AS vendor_name
       FROM products p
       JOIN types t ON p.type_uid = t.uid
       JOIN vendors v ON p.vendor_uid = v.uid
       ${whereClause}
       ${orderClause}
       LIMIT ? OFFSET ?`,
      dbParams
    );

    // 전체 개수
    const countRows = await conn.query(
      `SELECT COUNT(*) as count FROM products p JOIN types t ON p.type_uid = t.uid WHERE p.active = 1${category ? ' AND t.label = ?' : ''}`,
      category ? [category] : []
    );
    count = countRows[0]?.count ?? 0;

    // 카테고리 목록
    categories = await conn.query(
      `SELECT DISTINCT t.label as code, t.label as label
       FROM products p
       JOIN types t ON p.type_uid = t.uid
       WHERE p.active = 1 AND t.label IS NOT NULL AND t.label != ''
       ORDER BY t.label`
    );
  } finally {
    conn.release();
  }
  const totalPages = Math.ceil(Number(count) / PAGE_SIZE);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams as any);
    params.set('page', newPage.toString());
    window.location.search = params.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover curated products perfect for home improvement, DIY projects, gardening, or thoughtful gifting. 
              Featuring trusted vendors through affiliate and dropshipping partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/shop" className="ml-4 text-gray-500 hover:text-gray-700">
                    Shop
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-900 font-medium">Products</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <ProductFilters categories={categories} currentCategory={category} currentSort={sort} />
        
        {/* Product Grid */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => {
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gray-200 flex flex-col items-center justify-center">
                      <ProductImage src={product.image_url} alt={product.name} />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-bold text-blue-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.vendor_name && (
                          <span className="text-sm text-gray-500">
                            by {product.vendor_name}
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                          View Details
                        </button>
                        {product.product_url && (
                          <a
                            href={product.product_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm font-medium text-center"
                          >
                            Visit Store
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <Pagination page={page} totalPages={totalPages} />
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your filters or check back later for new products.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 