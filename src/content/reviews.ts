import { businessSettings } from "./business";
import type { ReviewRecord } from "./types";

export const reviews: ReviewRecord[] = [
  {
    id: "angi-overview",
    source: "Angi",
    rating: 5.0,
    reviewCount: 2,
    recommendationPercent: 100,
    excerpt:
      "Exception service!! Recommend to anyone in need of a wide range of cleaning services",
    attribution: "Jenny P., Angi",
    dateLabel: "March 2017",
    url: businessSettings.angiUrl,
  },
];

export const reviewSummary = {
  source: "Angi" as const,
  rating: 5.0,
  reviewCount: 2,
  recommendationPercent: 100,
  inBusinessSince: businessSettings.servingSince,
  freeEstimates: true,
};
