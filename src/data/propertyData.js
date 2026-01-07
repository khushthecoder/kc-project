const cities = ["New York", "Los Angeles", "Miami", "Chicago", "San Francisco", "Boston", "Dallas", "Seattle", "Austin", "Denver"];
const propertyTypes = ["Apartment", "House", "Villa", "Penthouse", "Mansion", "Loft", "Townhouse", "Condo"];
const neighborhoods = {
    3: ["Manhattan", "Brooklyn", "Queens"],
    4: ["Beverly Hills", "Santa Monica", "Malibu"],
    5: ["South Beach", "Brickell", "Coral Gables"],
    6: ["Gold Coast", "Lincoln Park", "Wicker Park"],
    7: ["Mission District", "Pacific Heights", "Nob Hill"],
    8: ["Back Bay", "Beacon Hill", "South End"],
    9: ["Highland Park", "Preston Hollow", "Uptown"],
    10: ["Capitol Hill", "Ballard", "Fremont"],
    11: ["Zilker", "Tarrytown", "Barton Hills"],
    12: ["Cherry Creek", "LoDo", "Washington Park"]
};

const titles = [
    "Modern minimalist sanctuary",
    "Elegant traditional estate",
    "Futuristic glass-walled retreat",
    "Opulent mediterranean villa",
    "Contemporary urban loft",
    "Stunning waterfront mansion",
    "Sophisticated high-rise penthouse",
    "Charming historic townhouse",
    "Secluded hilltop enclave",
    "Breathtaking mountain-view lodge"
];

const images = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687940-47a0f925901e",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68"
];

export const generateBuyProperties = () => {
    const properties = [];
    for (let i = 1; i <= 60; i++) {
        const cityIdx = Math.floor(Math.random() * cities.length);
        const cityName = cities[cityIdx];
        const nbhOptions = neighborhoods[cityIdx + 3] || ["Downtown", "Central"];
        const neighborhood = nbhOptions[Math.floor(Math.random() * nbhOptions.length)];
        const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
        const titleBase = titles[Math.floor(Math.random() * titles.length)];
        const title = `${titleBase} in ${neighborhood}`;
        const price = 1000000 + Math.floor(Math.random() * 24000000);
        const formattedPrice = `$${price.toLocaleString()}`;
        const bedrooms = 2 + Math.floor(Math.random() * 8);
        const bathrooms = 2 + Math.floor(Math.random() * 6);
        const squareFt = 2000 + Math.floor(Math.random() * 15000);
        const imageUrl = `${images[i % images.length]}?auto=format&fit=crop&w=800&q=80`;
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
            features: ['Gourmet Kitchen', 'Smart Home Technology', 'Floor-to-ceiling Windows', 'Private Terrace', 'Hardwood Floors', 'Walk-in Closets'],
            yearBuilt: Math.floor(1980 + Math.random() * 43),
            isPremium: Math.random() > 0.7,
            isNew: Math.random() > 0.8
        });
    }
    return properties;
};

export const generateRentProperties = () => {
    const properties = [];
    for (let i = 101; i <= 160; i++) {
        const cityIdx = Math.floor(Math.random() * cities.length);
        const cityName = cities[cityIdx];
        const nbhOptions = neighborhoods[cityIdx + 3] || ["Downtown", "Central"];
        const neighborhood = nbhOptions[Math.floor(Math.random() * nbhOptions.length)];
        const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
        const titleBase = titles[Math.floor(Math.random() * titles.length)];
        const title = `Luxury ${type} for lease in ${neighborhood}`;
        const rent = 2500 + Math.floor(Math.random() * 27500);
        const formattedRent = `$${rent.toLocaleString()}/mo`;
        const bedrooms = 1 + Math.floor(Math.random() * 5);
        const bathrooms = 1 + Math.floor(Math.random() * 4);
        const squareFt = 800 + Math.floor(Math.random() * 4000);
        const imageUrl = `${images[i % images.length]}?auto=format&fit=crop&w=800&q=80`;
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
            features: ['High-End Appliances', 'In-unit Laundry', 'Central Air Conditioning', 'Private Balcony', 'Concierge Services', 'Fitness Center Access'],
            yearBuilt: Math.floor(1980 + Math.random() * 43),
            isPremium: Math.random() > 0.7,
            isNew: Math.random() > 0.9
        });
    }
    return properties;
};

export const buyProperties = generateBuyProperties();
export const rentProperties = generateRentProperties();
