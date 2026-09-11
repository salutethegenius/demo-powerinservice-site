import type { PropertyType } from "./types";

export const propertyTypes: PropertyType[] = [
  {
    id: "office",
    name: "Offices",
    summary:
      "Cleaning, floor care, and light maintenance for office interiors and shared staff areas.",
    imageId: "office-building",
  },
  {
    id: "retail",
    name: "Retail properties",
    summary:
      "Help keeping sales floors, fitting areas, and back-of-house spaces presentable.",
    imageId: "retail-interior",
  },
  {
    id: "apartment-community",
    name: "Apartment communities",
    summary:
      "Unit turnovers, punch-outs, and common-area cleaning for multifamily properties.",
    imageId: "apartment-community",
  },
  {
    id: "commercial-common-area",
    name: "Commercial common areas",
    summary:
      "Lobbies, corridors, restrooms, and other shared spaces that set the tone for a property.",
    imageId: "office-lounge",
  },
  {
    id: "restaurant-entertainment",
    name: "Restaurants and entertainment spaces",
    summary:
      "Cleaning and floor care for dining rooms, lobbies, and guest-facing interiors.",
    imageId: "restaurant-interior",
  },
  {
    id: "residential",
    name: "Residential properties",
    summary:
      "Home cleaning, floor care, and light property work when a house or condo needs attention.",
    imageId: "residential-interior",
  },
];
