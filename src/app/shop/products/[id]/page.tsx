import Image from 'next/image';
import Link from 'next/link';
import pool from '@/app/upgrade/contractor-finder/db';
import ProductImage from '../ProductImage.client';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  product_url: string;
  category: string;
  vendor_name: string;
  cost_price?: number;
  commission_pct?: number;
  stock_qty?: number;
  sku?: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  
  console.log('[ProductDetailPage] Requested product ID:', productId);
  
  if (isNaN(productId)) {
    console.log('[ProductDetailPage] Invalid product ID');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invalid Product ID</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/shop" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  let product: Product | null = null;
  let relatedProducts: Product[] = [];

    try {
    const conn = await pool.getConnection();
    
    console.log('[ProductDetailPage] Fetching product with ID:', productId);
    
    // Get product details
    const products = await conn.query(
      `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, 
              t.label AS category, v.company AS vendor_name, p.cost_price, p.commission_pct, p.stock_qty, p.sku
       FROM products p
       JOIN types t ON p.type_uid = t.uid
       JOIN vendors v ON p.vendor_uid = v.uid
       WHERE p.uid = ? AND p.active = 1`,
      [productId]
    );
    
    console.log('[ProductDetailPage] Found products:', products.length);
    
    if (products.length > 0) {
      product = products[0];
      console.log('[ProductDetailPage] Product found:', product!.name);
      
      // Get related products (same category, excluding current product)
      relatedProducts = await conn.query(
        `SELECT p.uid AS id, p.name, p.description, p.retail_price AS price, p.image_url, p.product_url, 
                t.label AS category, v.company AS vendor_name
         FROM products p
         JOIN types t ON p.type_uid = t.uid
         JOIN vendors v ON p.vendor_uid = v.uid
         WHERE p.active = 1 AND t.label = ? AND p.uid != ?
         ORDER BY p.uid DESC
         LIMIT 4`,
        [product!.category, productId]
      );
      
      console.log('[ProductDetailPage] Related products found:', relatedProducts.length);
    } else {
      console.log('[ProductDetailPage] No product found with ID:', productId);
    }
    
    conn.release();
  } catch (error) {
    console.error('[ProductDetailPage] Error fetching product:', error);
  }

  if (!product) {
    console.log('[ProductDetailPage] Rendering Product Not Found page');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/shop" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent-hover transition">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  console.log('[ProductDetailPage] Rendering product page for:', product.name);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getCategorySlug = (category: string): string => {
    const categoryMap: Record<string, string> = {
      'Trending Products': 'trending',
      'Interior Accessories': 'interior-accessories',
      'DIY Kits & Tools': 'diy-kits',
      'Gardening Essentials': 'gardening',
      'Gift Ideas': 'gift-ideas',
      'Affiliate Product': 'affiliate-product',
      'Drop-Shipping Product': 'drop-shipping-product',
      'Solar Installer': 'solar-installer',
    };
    return categoryMap[category] || category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-and-');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/shop" className="ml-4 text-gray-400 hover:text-gray-500">
                    Shop
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-500">{product.category}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
              <div className="relative w-full h-64">
                <ProductImage src={product.image_url} alt={product.name} />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">{formatPrice(product.price)}</span>
                {product.cost_price && (
                  <span className="text-sm text-gray-500 ml-2">
                    MSRP: {formatPrice(product.cost_price)}
                  </span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Vendor:</span>
                  <span className="font-medium">{product.vendor_name}</span>
                </div>
                {product.sku && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">SKU:</span>
                    <span className="font-medium">{product.sku}</span>
                  </div>
                )}
                {product.stock_qty !== undefined && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Stock:</span>
                    <span className={`font-medium ${product.stock_qty > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {product.stock_qty > 0 ? `${product.stock_qty} available` : 'Out of stock'}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/shop/${getCategorySlug(product.category)}`}
                  className="flex-1 bg-primary text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-accent-hover transition"
                >
                  Back to List
                </Link>
                <a
                  href={product.product_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-gray-700 text-center py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-primary hover:text-primary transition"
                >
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                             {relatedProducts.map((relatedProduct) => (
                 <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                   <div className="relative w-full h-48">
                     <ProductImage src={relatedProduct.image_url} alt={relatedProduct.name} />
                   </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-600 font-bold">{formatPrice(relatedProduct.price)}</span>
                      <span className="text-xs text-gray-500">by {relatedProduct.vendor_name}</span>
                    </div>
                    <Link
                      href={`/shop/products/${relatedProduct.id}`}
                      className="block w-full bg-primary text-white text-center py-2 px-4 rounded font-semibold hover:bg-accent-hover transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 