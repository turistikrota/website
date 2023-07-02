import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import debounce from "~/hooks/dom/useDebounce";
import { PaginationRequest } from "~/types/request/request.types";
import {
  PlaceFilterRequest,
  Type,
  isOrder,
  isPlaceType,
  isSort,
} from "./place.types";

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
    sort: (value: string) => {
      if (isSort(value)) {
        query.filter.sort = value;
        return;
      }
      query.filter.sort = undefined;
    },
    order: (value: string) => {
      if (isOrder(value)) {
        query.filter.order = value;
        return;
      }
      query.filter.order = undefined;
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

export const usePlaceFilterChanger = () => {
  const pathname = usePathname();
  const router = useRouter();
  const debouncedPush = debounce((query: string, cb?: () => void) => {
    const url = `${pathname}?${query}`;
    console.log("url::", url);
    router.push(url, { shallow: true });
    if (cb) cb();
  }, 500);
  return debouncedPush;
};

export const placeToQuery = (
  place: PaginationRequest<PlaceFilterRequest>
): string => {
  const query = new URLSearchParams();
  if (place.page) {
    query.append("page", place.page.toString());
  }
  if (place.limit) {
    query.append("limit", place.limit.toString());
  }
  if (place.filter.coordinates) {
    const [lat, lng] = place.filter.coordinates;
    query.append("lat", lat.toString());
    query.append("lng", lng.toString());
  }
  if (place.filter.featureUUIDs) {
    query.append("features", place.filter.featureUUIDs.join(","));
  }
  if (place.filter.types) {
    query.append("types", place.filter.types.join(","));
  }
  if (place.filter.isPayed !== undefined) {
    query.append("pay", place.filter.isPayed ? "on" : "off");
  }
  if (place.filter.distance) {
    query.append("dist", place.filter.distance.toString());
  }
  if (place.filter.timeSpent) {
    const { min, max } = place.filter.timeSpent;
    query.append("time", `${min},${max}`);
  }
  if (place.filter.minReview) {
    query.append("minRev", place.filter.minReview.toString());
  }
  if (place.filter.maxReview) {
    query.append("maxRev", place.filter.maxReview.toString());
  }
  if (place.filter.minAveragePoint) {
    query.append("minPoint", place.filter.minAveragePoint.toString());
  }
  if (place.filter.maxAveragePoint) {
    query.append("maxPoint", place.filter.maxAveragePoint.toString());
  }
  if (place.filter.query) {
    query.append("q", place.filter.query);
  }
  if (place.filter.sort) {
    query.append("sort", place.filter.sort);
  }
  if (place.filter.order) {
    query.append("order", place.filter.order);
  }
  return query.toString();
};
