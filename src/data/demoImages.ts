import { DemoImage } from '../types';

// Helper to create reliable SVG fallback data URLs if an external image encounters network issues
export const createSvgFallback = (label: string, category: string, bg: string, accent: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="${bg}"/>
    <path d="M0,280 Q150,230 300,270 T600,250 L600,400 L0,400 Z" fill="#2d3748" opacity="0.8"/>
    <path d="M50,330 Q180,310 280,340 T550,320" stroke="${accent}" stroke-width="4" fill="none" stroke-dasharray="12 12"/>
    <circle cx="300" cy="200" r="48" fill="${accent}" opacity="0.2"/>
    <text x="300" y="195" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">${category.toUpperCase()}</text>
    <text x="300" y="225" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">${label}</text>
    <text x="300" y="375" font-family="Arial, sans-serif" font-size="12" fill="#cbd5e1" text-anchor="middle">RaastaAI Civic Asset • Verified Sample</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const DEMO_ROAD_IMAGES: DemoImage[] = [
  // POTHOLE IMAGES (1 to 3)
  {
    id: 'pothole-1',
    title: 'Large Pothole on Urban Road',
    category: 'Pothole',
    url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=300&q=80',
    description: 'Deep circular pothole on high-traffic urban avenue posing hazard to two-wheelers and vehicles.'
  },
  {
    id: 'pothole-2',
    title: 'Multiple Potholes on Damaged Street',
    category: 'Pothole',
    url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=300&q=80',
    description: 'Cluster of recurring road craters across a 30-meter stretch of municipal arterial roadway.'
  },
  {
    id: 'pothole-3',
    title: 'Deep Pothole on Rainy Road',
    category: 'Pothole',
    url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80',
    description: 'Submerged deep pothole covered by monsoon rainwater, causing hidden impact risks.'
  },

  // WATERLOGGING IMAGES (4 to 6)
  {
    id: 'waterlogging-1',
    title: 'Waterlogged Residential Street',
    category: 'Waterlogging',
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=300&q=80',
    description: 'Stagnant stormwater submerging residential road carriageway, blocking pedestrian access.'
  },
  {
    id: 'waterlogging-2',
    title: 'Flooded Road Near Drainage System',
    category: 'Waterlogging',
    url: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=300&q=80',
    description: 'Clogged roadside culvert and drain overflow causing extensive road flooding after storm.'
  },
  {
    id: 'waterlogging-3',
    title: 'Water Accumulation on Urban Road',
    category: 'Waterlogging',
    url: 'https://images.unsplash.com/photo-1496868834840-5f4c98840aaa?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1496868834840-5f4c98840aaa?auto=format&fit=crop&w=300&q=80',
    description: 'Severe gutter blockage creating a 40cm water puddle spanning across two traffic lanes.'
  },

  // DAMAGED ROAD IMAGES (7 to 9)
  {
    id: 'damaged-1',
    title: 'Cracked Asphalt Road Surface',
    category: 'Damaged Road',
    url: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=300&q=80',
    description: 'Alligator cracking and structural pavement degradation indicating sub-base failure.'
  },
  {
    id: 'damaged-2',
    title: 'Broken Road Surface & Edge Crumble',
    category: 'Damaged Road',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=300&q=80',
    description: 'Disintegrated asphalt edge with loose gravel and broken curb dividing lanes.'
  },
  {
    id: 'damaged-3',
    title: 'Damaged Road with Uneven Pavement',
    category: 'Damaged Road',
    url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=300&q=80',
    description: 'Subsidence and pavement heave near junction creating severe bumpy unevenness.'
  }
];

export const DEMO_REPAIR_IMAGES: DemoImage[] = [
  {
    id: 'repair-1',
    title: 'Fresh Asphalt Patch & Compaction',
    category: 'Repaired Road',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80',
    description: 'Hot-mix asphalt patch compacted and sealed flush with the existing carriageway.'
  },
  {
    id: 'repair-2',
    title: 'Newly Paved Municipal Road Surface',
    category: 'Repaired Road',
    url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=300&q=80',
    description: 'Complete bituminous resurfacing with proper drainage gradient and smooth leveling.'
  },
  {
    id: 'repair-3',
    title: 'Completed Resurfacing with Road Markings',
    category: 'Repaired Road',
    url: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=300&q=80',
    description: 'Repaired and restriped section with high visibility thermoplastic road markings.'
  }
];

export const DEMO_LOCATIONS = [
  {
    lat: 19.0760,
    lng: 72.8777,
    address: 'Near Bandra Kurla Complex Junction, Road No. 4',
    area: 'BKC Central',
    city: 'Mumbai Metro'
  },
  {
    lat: 19.1136,
    lng: 72.8697,
    address: 'Near Metro Pillar 142, Andheri-Kurla Road',
    area: 'Andheri East',
    city: 'Mumbai Metro'
  },
  {
    lat: 19.1760,
    lng: 72.8427,
    address: 'SV Road, Opposite Municipal Secondary School',
    area: 'Malad West',
    city: 'Mumbai Metro'
  },
  {
    lat: 19.0330,
    lng: 72.8550,
    address: 'Dr. B.A. Road, Near Dadar Flyover Descent',
    area: 'Dadar Central',
    city: 'Mumbai Metro'
  },
  {
    lat: 19.0896,
    lng: 72.8997,
    address: 'Ghatkopar-Mahul Link Road, Sector 8',
    area: 'Ghatkopar East',
    city: 'Mumbai Metro'
  },
  {
    lat: 19.1350,
    lng: 72.8250,
    address: 'Lokhandwala Back Road, Behind Market Complex',
    area: 'Versova',
    city: 'Mumbai Metro'
  }
];
