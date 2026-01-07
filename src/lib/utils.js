import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function filterProperties(properties, filters) {
    return properties.filter(property => {
        if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
            return false;
        }

        if (filters.propertyType && property.type &&
            property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
            return false;
        }

        if (filters.bedrooms && property.bedrooms < parseInt(filters.bedrooms, 10)) {
            return false;
        }

        if (filters.priceRange) {
            const price = parseInt(property.price.replace(/[^\d]/g, ''), 10);
            const [minPrice, maxPrice] = filters.priceRange.split('-').map(p => parseInt(p, 10));

            if (maxPrice && (price < minPrice || price > maxPrice)) {
                return false;
            } else if (!maxPrice && price < minPrice) {
                return false;
            }
        }

        return true;
    });
}
