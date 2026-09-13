import type { ServiceCategory } from "./types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial Cleaning",
    href: "/commercial-cleaning",
    headline: "Professional cleaning for the spaces your business depends on.",
    supporting:
      "Recurring and one-time cleaning for offices, retail spaces, common areas, floors, carpets, restrooms, and shared spaces throughout Orlando and Central Florida.",
    prominence: "primary",
    imageId: "facility-window-cleaning",
    services: [
      {
        id: "commercial-facility",
        name: "Commercial facility cleaning",
        summary:
          "Practical cleaning for business properties, with the scope discussed after a walkthrough.",
      },
      {
        id: "office-cleaning",
        name: "Office cleaning",
        summary:
          "Workstations, meeting rooms, kitchens, and the shared spaces staff use every day.",
      },
      {
        id: "retail-cleaning",
        name: "Retail space cleaning",
        summary:
          "Sales floors, fitting areas, and back-of-house spaces that need to stay presentable for customers.",
      },
      {
        id: "common-area-cleaning",
        name: "Common-area cleaning",
        summary:
          "Lobbies, corridors, restrooms, and other shared spaces in commercial properties.",
      },
      {
        id: "recurring-cleaning",
        name: "Recurring cleaning",
        summary:
          "A regular schedule based on how the property is used, not a one-size-fits-all package.",
      },
      {
        id: "deep-cleaning",
        name: "One-time deep cleaning",
        summary:
          "A thorough reset when a space needs more than routine maintenance.",
      },
    ],
  },
  {
    id: "floor-care",
    name: "Floor & Surface Care",
    shortName: "Floor Care",
    href: "/floor-care",
    headline: "Bring floors and surfaces back to a professional standard.",
    supporting:
      "Carpet cleaning, tile and grout cleaning, floor cleaning, floor restoration, and water extraction for commercial and residential properties.",
    prominence: "primary",
    imageId: "polished-conference-floor",
    services: [
      {
        id: "carpet-cleaning",
        name: "Carpet cleaning",
        summary:
          "Carpet care for offices, common areas, apartments, and homes.",
      },
      {
        id: "tile-grout",
        name: "Tile and grout cleaning",
        summary:
          "Tile floors and grout lines cleaned to a more presentable standard.",
      },
      {
        id: "floor-cleaning",
        name: "Floor cleaning",
        summary:
          "Routine and project-based cleaning for hard-surface commercial and residential floors.",
      },
      {
        id: "floor-restoration",
        name: "Floor restoration",
        summary:
          "Help restoring tired floors so the property looks better prepared for occupancy or daily use.",
      },
      {
        id: "water-extraction",
        name: "Water extraction",
        summary:
          "Extraction support when carpets or floors hold standing water. Scope is reviewed on site.",
      },
    ],
  },
  {
    id: "property-services",
    name: "Turnovers & Maintenance",
    shortName: "Property Services",
    href: "/property-services",
    headline: "Cleaning, turnovers, and light property work from one team.",
    supporting:
      "Apartment punch-outs, Airbnb punch-outs, move-in and move-out preparation, painting, sheetrock work, home repairs, and general handyman services.",
    prominence: "primary",
    imageId: "interior-painting",
    services: [
      {
        id: "punch-outs",
        name: "Apartment punch-outs",
        summary:
          "Prepare apartment units between residents with cleaning and light property work as needed.",
      },
      {
        id: "airbnb-punch-outs",
        name: "Airbnb punch-outs",
        summary:
          "Turn over short-term rental units between guests so the space is ready for the next stay.",
      },
      {
        id: "move-in",
        name: "Move-in preparation",
        summary:
          "Get a property ready before new occupants arrive.",
      },
      {
        id: "move-out",
        name: "Move-out preparation",
        summary:
          "Reset a unit or home after occupants leave so it can be shown or re-leased.",
      },
      {
        id: "painting",
        name: "Painting",
        summary:
          "Interior painting to refresh walls as part of a turnover or property update.",
      },
      {
        id: "sheetrock",
        name: "Sheetrock work",
        summary:
          "Light sheetrock repairs that help a unit look ready again.",
      },
      {
        id: "home-repairs",
        name: "Home repairs",
        summary:
          "General interior repairs discussed after we see the property.",
      },
      {
        id: "handyman",
        name: "General handyman services",
        summary:
          "Light property maintenance and handyman assistance — not licensed trade work.",
      },
    ],
  },
  {
    id: "residential",
    name: "Residential Services",
    shortName: "Residential",
    href: "/residential",
    headline: "Dependable help for a cleaner, better-kept home.",
    supporting:
      "Residential cleaning, floor care, painting, sheetrock work, home repairs, and general handyman assistance. Request an estimate rather than booking online.",
    prominence: "secondary",
    imageId: "residential-interior",
    services: [
      {
        id: "residential-cleaning",
        name: "Residential cleaning",
        summary: "Home cleaning discussed around the size of the property and what you need done.",
      },
      {
        id: "residential-carpet",
        name: "Carpet cleaning",
        summary: "Carpet cleaning for houses, condos, and apartments.",
      },
      {
        id: "residential-tile",
        name: "Tile and grout cleaning",
        summary: "Tile floors and grout cleaned as part of a home service visit.",
      },
      {
        id: "residential-extraction",
        name: "Water extraction",
        summary: "Extraction help when residential carpets or floors need water removed.",
      },
      {
        id: "residential-painting",
        name: "Painting",
        summary: "Interior painting to refresh rooms or prepare a home for occupancy.",
      },
      {
        id: "residential-sheetrock",
        name: "Sheetrock work",
        summary: "Light sheetrock repairs in residential interiors.",
      },
      {
        id: "residential-handyman",
        name: "General handyman assistance",
        summary: "Practical help with small interior items after we review the request.",
      },
      {
        id: "residential-repairs",
        name: "Home repairs",
        summary: "General home repairs that fall under light property maintenance.",
      },
    ],
  },
];

export function getCategory(id: ServiceCategory["id"]) {
  const category = serviceCategories.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Missing service category: ${id}`);
  }
  return category;
}
