import { I18nTranslation, ListResponse } from "~/types/response/response.types";

export type PlaceFilterRequest = {
  query?: string;
  coordinates?: Coordinates;
  featureUUIDs?: string[];
  types?: Type[];
  isPayed?: boolean;
  distance?: number;
  timeSpent?: TimeSpent;
  minReview?: number;
  maxReview?: number;
  minAveragePoint?: number;
  maxAveragePoint?: number;
};

export type PlaceListItem = {
  images: PlaceImage[];
  translations: I18nTranslation<TranslationItem>;
  averageTimeSpent: TimeSpent;
  review: Review;
  coordinates: Coordinates;
  isPayed: boolean;
  type: Type;
};
export type PlaceDetail = {
  features: FeatureItem[];
  images: PlaceImage[];
  translations: I18nTranslation<FullTranslation>;
  averageTimeSpent: TimeSpent;
  review: Review;
  coordinates: Coordinates;
  isPayed: boolean;
  type: Type;
  createdAt: Date;
};

type FeatureItem = {
  uuid: string;
  icon: string;
  translations: I18nTranslation<FeatureTranslation>;
};

type FeatureTranslation = {
  title: string;
  description: string;
};

enum Type {
  Eating = "eating",
  Coffee = "coffee",
  Bar = "bar",
  Beach = "beach",
  Amaze = "amaze",
}

type PlaceImage = {
  url: string;
  order: number;
};

type TranslationItem = {
  title: string;
  description: string;
  slug: string;
};

type FullTranslation = TranslationItem & {
  markdownUrl: string;
  seo: Seo;
};

type Seo = {
  title: string;
  description: string;
  keywords: string;
};

type TimeSpent = {
  min: number;
  max: number;
};

type Review = {
  total: number;
  averagePoint: number;
};

type Coordinates = [number, number];

export function isPlaceListResponse(
  response: any
): response is ListResponse<PlaceListItem> {
  return response && response.list && response.total;
}