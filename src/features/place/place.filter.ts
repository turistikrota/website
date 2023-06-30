import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PaginationRequest } from "~/types/request/request.types";
import { PlaceFilterRequest, Type, isPlaceType } from "./place.types";

const getQueryByKeyBindings = (searchParams: ReadonlyURLSearchParams) => {
  const query: PaginationRequest<PlaceFilterRequest> = { filter: {} };
  const keyBindings = {
    page: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.page = val;
      }
    },
    limit: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.limit = val;
      }
    },
    lat: (value: string) => {
      let lng = searchParams.get("lng");
      if (lng) {
        const lat = parseFloat(value);
        const lng2 = parseFloat(lng);
        if (!isNaN(lat) && !isNaN(lng2)) {
          query.filter.coordinates = [lat, lng2];
        }
      }
    },
    lng: (value: string) => {
      let lat = searchParams.get("lat");
      if (lat) {
        const lng = parseFloat(value);
        const lat2 = parseFloat(lat);
        if (!isNaN(lng) && !isNaN(lat2)) {
          query.filter.coordinates = [lat2, lng];
        }
      }
    },
    features: (value: string) => {
      query.filter.featureUUIDs = value.split(",");
    },
    types: (value: string) => {
      const list = value.split(",");
      const types: Type[] = list.filter((type) => isPlaceType(type)) as Type[];
      if (types.length > 0) {
        query.filter.types = types;
      }
    },
    pay: (value: string) => {
      if (["on", "off"].includes(value)) {
        query.filter.isPayed = value === "on";
      }
    },
    dist: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.filter.distance = val;
      }
    },
    time: (value: string) => {
      const [min, max] = value.split(",");
      query.filter.timeSpent = {
        min: parseInt(min),
        max: parseInt(max),
      };
    },
    minRev: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.filter.minReview = val;
      }
    },
    maxRev: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.filter.maxReview = val;
      }
    },
    minPoint: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.filter.minAveragePoint = val;
      }
    },
    maxPoint: (value: string) => {
      const val = parseInt(value);
      if (!isNaN(val)) {
        query.filter.maxAveragePoint = val;
      }
    },
    q: (value: string) => {
      query.filter.query = value;
    },
  };
  searchParams.forEach((value, key) => {
    if (Object.keys(keyBindings).includes(key)) {
      keyBindings[key as keyof typeof keyBindings](value);
    }
  });
  return query;
};

export const usePlaceFilter = (): PaginationRequest<PlaceFilterRequest> => {
  const [query, setQuery] = useState<PaginationRequest<PlaceFilterRequest>>({
    filter: {},
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(getQueryByKeyBindings(searchParams));
  }, [searchParams]);

  return query;
};
