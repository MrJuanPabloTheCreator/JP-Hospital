"use client"

// haversine.ts

export function calculateHaversineDistance(
    lat1: string | null,
    lon1: string | null,
    lat2: string | null,
    lon2: string | null
  ): number {
    // Convert latitude and longitude to numbers or default to 0
    const convertedLat1 = parseFloat(lat1 as string) || 0;
    const convertedLon1 = parseFloat(lon1 as string) || 0;
    const convertedLat2 = parseFloat(lat2 as string) || 0;
    const convertedLon2 = parseFloat(lon2 as string) || 0;
  
    const R = 6371; // Radius of the Earth in kilometers
  
    // Convert latitude and longitude from degrees to radians
    const dLat = (convertedLat2 - convertedLat1) * Math.PI / 180;
    const dLon = (convertedLon2 - convertedLon1) * Math.PI / 180;
  
    // Haversine formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(convertedLat1 * Math.PI / 180) * Math.cos(convertedLat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    // Distance in kilometers
    const distance = R * c;
  
    return distance;
}
  
  
  