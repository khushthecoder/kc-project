
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Filter properties based on search criteria
export function filterProperties(properties: any[], filters: any) {
  return properties.filter(property => {
    // Filter by location
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    
    // Filter by property type
    if (filters.propertyType && property.type && 
      property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
      return false;
    }
    
    // Filter by bedrooms (greater than or equal to)
    if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms, 10)) {
      return false;
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const price = parseInt(property.price.replace(/[^\d]/g, ''), 10);
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(p => parseInt(p, 10));
      
      if (maxPrice && (price < minPrice || price > maxPrice)) {
        return false;
      } else if (!maxPrice && price < minPrice) {
        // Handle cases like "25000000+" where there's only a min price
        return false;
      }
    }
    
    return true;
  });
}
