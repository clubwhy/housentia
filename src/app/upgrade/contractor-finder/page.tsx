export const runtime = 'nodejs';
import Image from 'next/image';
import Link from 'next/link';
const pool = require('./db');
import PageHero from '@/components/PageHero';

export const dynamic = 'force-dynamic';

type Agent = {
  uid: number;
  vendor_uid: number;
  name: string;
  title?: string;
  email?: string;
  phone?: string;
  photo?: string;
  sns_url?: string;
  website_url?: string;
};

type Vendor = {
  uid: number;
  company: string;
  website?: string;
  email?: string;
  phone?: string;
  type: number;
  type_label: string;
  type_code: string;
  active: number;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  lat?: number;
  lng?: number;
  logo?: string;
  thumbnail?: string;
  agents: Agent[];
};

async function getVendors() {
  const conn = await pool.getConnection();
  try {
    // Get all active solar vendors with type label
    const vendors = await conn.query(`
      SELECT v.*, t.label as type_label, t.code as type_code
      FROM vendors v
      JOIN types t ON v.type = t.uid
      WHERE v.active = 1 AND t.category = 'vendor' AND t.code = 'solar'
      ORDER BY v.company
    `);
    // For each vendor, get agents
    for (const vendor of vendors) {
      vendor.agents = await conn.query(
        'SELECT * FROM agents WHERE vendor_uid = ? ORDER BY name',
        [vendor.uid]
      );
    }
    return vendors;
  } finally {
    conn.release();
  }
}

export default async function ContractorFinderPage({ searchParams }: { searchParams: Record<string, string> }) {
  const category = searchParams.category || '';
  const sort = searchParams.sort || 'newest';
  const page = parseInt(searchParams.page || '1', 10);
  const vendors: Vendor[] = await getVendors();

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Find a Local Contractor"
        breadcrumbs={[
          { label: 'Upgrade', href: '/upgrade' },
          { label: 'Find a Local Contractor' }
        ]}
      />
      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-10 font-sans text-[17px] text-gray-800" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
        <h2 className="text-2xl font-bold text-center mb-4">Solar Company</h2>
        <p className="text-center text-gray-600 mb-10">Browse verified solar contractors, see company details, and connect directly with a local expert.</p>
        <div className="space-y-10">
          {vendors.map((vendor: Vendor) => (
            <div key={vendor.uid} className="bg-white rounded-xl shadow border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
              {/* Vendor Logo and Thumbnail */}
              <div className="flex flex-col items-center md:w-48 md:flex-shrink-0">
                {vendor.logo && (
                  <Image src={vendor.logo} alt={vendor.company + ' logo'} width={96} height={96} className="rounded-lg object-contain bg-gray-50 mb-2" />
                )}
                {vendor.thumbnail && (
                  <Image src={vendor.thumbnail} alt={vendor.company + ' thumbnail'} width={160} height={90} className="rounded-lg object-cover" />
                )}
              </div>
              {/* Vendor Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary-700 mb-1 md:mb-0">{vendor.company}</h3>
                  <span className="text-xs bg-gray-100 rounded px-2 py-1 text-gray-600">{vendor.type_label}</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-2 text-sm text-gray-700">
                  {vendor.website && <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Website</a>}
                  {vendor.email && <a href={`mailto:${vendor.email}`} className="text-blue-600 hover:underline">{vendor.email}</a>}
                  {vendor.phone && <span>{vendor.phone}</span>}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {vendor.city}, {vendor.state} {vendor.zipcode}
                </div>
                {/* Agents */}
                {vendor.agents && vendor.agents.length > 0 && (
                  <div className="mt-4">
                    <div className="font-semibold text-gray-700 mb-2">Local Experts:</div>
                    <div className="flex flex-wrap gap-4">
                      {vendor.agents.map((agent: Agent) => (
                        <div key={agent.uid} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-100">
                          {agent.photo && (
                            <Image src={agent.photo} alt={agent.name} width={48} height={48} className="rounded-full object-cover" />
                          )}
                          <div>
                            <div className="font-semibold text-gray-800">{agent.name}</div>
                            {agent.title && <div className="text-xs text-gray-500 mb-1">{agent.title}</div>}
                            <div className="text-xs text-gray-600 flex flex-col">
                              {agent.email && <a href={`mailto:${agent.email}`} className="hover:underline">{agent.email}</a>}
                              {agent.phone && <span>{agent.phone}</span>}
                              <div className="flex gap-2 mt-1">
                                {agent.sns_url && <a href={agent.sns_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">SNS</a>}
                                {agent.website_url && <a href={agent.website_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Website</a>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 