import coffeeCitiesData from "./coffeeShops.json";

export type CoffeeShopHoursEntry = {
  days: string[];
  label: string;
};

export type CoffeeShopDetails = {
  wifi?: boolean;
  sockets?: boolean;
  seating?: boolean;
  hours?: CoffeeShopHoursEntry[];
};

export type CoffeeShop = {
  id: string;
  name: string;
  coordinates: [number, number];
  description?: string;
  recommendedStudySpot?: boolean;
  accent: string;
  logoPath: string;
  website?: string;
  neighborhood?: string;
  address?: string;
  addressUrl?: string;
  details?: CoffeeShopDetails;
};

export type CoffeeCity = {
  id: string;
  label: string;
  shortLabel: string;
  center: [number, number];
  initialBounds?: [[number, number], [number, number]];
  shops: CoffeeShop[];
};

export const coffeeCities = coffeeCitiesData as Record<string, CoffeeCity>;

export const sanFranciscoCoffeeGuide = coffeeCities.sanFrancisco;
export const coffeeCityGuides = Object.values(coffeeCities);

export const getCoffeeCityPath = (city: CoffeeCity) =>
  city.id === sanFranciscoCoffeeGuide.id ? "/coffee-map" : `/coffee-map/${city.id}`;

export const getCoffeeCityDataPath = (city: CoffeeCity) => `/coffee-map/data/${city.id}.json`;

export const getCoffeeCityPageTitle = (city: CoffeeCity) =>
  city.id === sanFranciscoCoffeeGuide.id
    ? "Favorite Coffee Shops | Andre Amor"
    : `Favorite Coffee Shops in ${city.label} | Andre Amor`;
