
// Property data types
export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFt: number;
  type: string;
  imageUrl: string;
  description?: string;
  features?: string[];
  yearBuilt?: number;
  isPremium?: boolean;
  isNew?: boolean;
}

// Cities with neighborhoods
const cities = {
  'New York': ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
  'Los Angeles': ['Beverly Hills', 'Hollywood', 'Malibu', 'Bel Air', 'Santa Monica', 'Venice'],
  'Miami': ['Miami Beach', 'South Beach', 'Brickell', 'Coconut Grove', 'Coral Gables'],
  'Chicago': ['Gold Coast', 'Lincoln Park', 'Streeterville', 'River North', 'Wicker Park'],
  'San Francisco': ['Pacific Heights', 'Nob Hill', 'Marina District', 'SoMa', 'Russian Hill'],
  'Boston': ['Back Bay', 'Beacon Hill', 'North End', 'South End', 'Fenway'],
  'Dallas': ['Highland Park', 'Uptown', 'Preston Hollow', 'Turtle Creek', 'Bishop Arts'],
  'Seattle': ['Capitol Hill', 'Queen Anne', 'Ballard', 'Fremont', 'Belltown'],
  'Austin': ['Westlake Hills', 'Tarrytown', 'Downtown', 'South Congress', 'Zilker'],
  'Denver': ['Cherry Creek', 'LoDo', 'Highland', 'Washington Park', 'River North']
};

// Property types
const propertyTypes = ['apartment', 'house', 'penthouse', 'villa', 'loft', 'mansion', 'townhouse', 'condo'];

// Property titles by type
const titlesByType = {
  apartment: [
    'Luxury High-Rise Apartment', 
    'Elegant City Apartment', 
    'Modern Downtown Apartment', 
    'Spacious Urban Flat',
    'Renovated Classic Apartment',
    'Premium Skyline Apartment'
  ],
  house: [
    'Contemporary Family Home', 
    'Spacious Modern House', 
    'Luxurious Suburban Residence', 
    'Elegant Detached House',
    'Grand Family Estate',
    'Executive Home'
  ],
  penthouse: [
    'Exclusive Rooftop Penthouse', 
    'Luxury Sky Penthouse', 
    'Panoramic View Penthouse', 
    'Elite Penthouse Suite',
    'Premium Sky Residence',
    'Ultimate Penthouse Experience'
  ],
  villa: [
    'Mediterranean-Style Villa', 
    'Luxury Beachfront Villa', 
    'Modern Private Villa', 
    'Exclusive Hillside Villa',
    'Resort-Style Villa',
    'Secluded Garden Villa'
  ],
  loft: [
    'Industrial Chic Loft', 
    'Converted Artist Loft', 
    'Downtown Designer Loft', 
    'Luxury Open Loft',
    'Historic Warehouse Loft',
    'Premium Urban Loft'
  ],
  mansion: [
    'Grand Estate Mansion', 
    'Historic Luxury Mansion', 
    'Modern Architectural Mansion', 
    'Waterfront Mansion',
    'Celebrity-Style Mansion',
    'Gated Private Mansion'
  ],
  townhouse: [
    'Luxury City Townhouse', 
    'Historic Renovated Townhouse', 
    'Modern Urban Townhouse', 
    'Elegant Row Townhouse',
    'Designer Townhouse Residence',
    'Premium Townhouse with Garden'
  ],
  condo: [
    'Luxury Waterfront Condo', 
    'High-End Resort Condo', 
    'Modern Downtown Condo', 
    'Premium Tower Condo',
    'Exclusive Beachside Condo',
    'Urban Lifestyle Condo'
  ]
};

// Images for different property types
const imagesByType = {
  apartment: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  house: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80'
  ],
  penthouse: [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1587470495466-f4bc2c071768?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  villa: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  loft: [
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  mansion: [
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  townhouse: [
    'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ],
  condo: [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
  ]
};

// Generate buy properties (more expensive)
export const generateBuyProperties = () => {
  const properties: Property[] = [];
  
  for (let i = 1; i <= 60; i++) {
    const cityNames = Object.keys(cities);
    const cityName = cityNames[Math.floor(Math.random() * cityNames.length)];
    const neighborhoods = cities[cityName];
    const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    
    const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    const titles = titlesByType[type];
    const title = titles[Math.floor(Math.random() * titles.length)];
    
    const images = imagesByType[type];
    const imageUrl = images[Math.floor(Math.random() * images.length)];
    
    // For buy properties - higher prices
    const minPrice = 1000000;
    const maxPrice = 25000000;
    const price = Math.floor(minPrice + Math.random() * (maxPrice - minPrice));
    const formattedPrice = `$${price.toLocaleString()}`;
    
    const bedrooms = Math.floor(1 + Math.random() * 7);
    const bathrooms = Math.floor(bedrooms * 0.5 + Math.random() * 3);
    const squareFt = Math.floor(1000 + bedrooms * 500 + Math.random() * 5000);
    
    properties.push({
      id: i,
      title,
      location: `${neighborhood}, ${cityName}`,
      price: formattedPrice,
      bedrooms,
      bathrooms,
      squareFt,
      type,
      imageUrl,
      description: `This beautiful ${type} offers stunning views and luxurious finishes throughout. Featuring ${bedrooms} bedrooms and ${bathrooms} bathrooms across ${squareFt} square feet of living space.`,
      features: [
        'Gourmet Kitchen',
        'Smart Home Technology',
        'Floor-to-ceiling Windows',
        'Private Terrace',
        'Hardwood Floors',
        'Walk-in Closets'
      ],
      yearBuilt: Math.floor(1980 + Math.random() * 43),
      isPremium: Math.random() > 0.7,
      isNew: Math.random() > 0.8
    });
  }
  
  return properties;
};

// Generate rent properties (lower monthly costs)
export const generateRentProperties = () => {
  const properties: Property[] = [];
  
  for (let i = 101; i <= 160; i++) {
    const cityNames = Object.keys(cities);
    const cityName = cityNames[Math.floor(Math.random() * cityNames.length)];
    const neighborhoods = cities[cityName];
    const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    
    const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    const titles = titlesByType[type];
    const title = titles[Math.floor(Math.random() * titles.length)];
    
    const images = imagesByType[type];
    const imageUrl = images[Math.floor(Math.random() * images.length)];
    
    // For rent properties - monthly costs
    const minRent = 2500;
    const maxRent = 25000;
    const rent = Math.floor(minRent + Math.random() * (maxRent - minRent));
    const formattedRent = `$${rent.toLocaleString()}/month`;
    
    const bedrooms = Math.floor(1 + Math.random() * 5);
    const bathrooms = Math.floor(bedrooms * 0.5 + Math.random() * 2);
    const squareFt = Math.floor(800 + bedrooms * 400 + Math.random() * 2000);
    
    properties.push({
      id: i,
      title,
      location: `${neighborhood}, ${cityName}`,
      price: formattedRent,
      bedrooms,
      bathrooms,
      squareFt,
      type,
      imageUrl,
      description: `Experience luxury living in this magnificent ${type} for rent. With ${bedrooms} bedrooms and ${bathrooms} bathrooms in ${squareFt} square feet of space.`,
      features: [
        'High-End Appliances',
        'In-unit Laundry',
        'Central Air Conditioning',
        'Private Balcony',
        'Concierge Services',
        'Fitness Center Access'
      ],
      yearBuilt: Math.floor(1980 + Math.random() * 43),
      isPremium: Math.random() > 0.7,
      isNew: Math.random() > 0.8
    });
  }
  
  return properties;
};

// Create and export the property data
export const buyProperties = generateBuyProperties();
export const rentProperties = generateRentProperties();
