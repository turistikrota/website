import { createSlice } from "@reduxjs/toolkit";
import { safeStorageParse } from "~/utils/storage";
import { placeApi } from "./place.api";
import { PlaceFeatureListItem, isPlaceFeatureList } from "./place.types";

enum PlaceStorage {
  Features = "cache:place:features",
}

interface PlaceState {
  features: PlaceFeatureListItem[];
}

const initialState: PlaceState = {
  features: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    setFeatures: (state, action) => {
      state.features = action.payload;
      localStorage.setItem(
        PlaceStorage.Features,
        JSON.stringify(action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      placeApi.endpoints.listFeatures.matchFulfilled,
      (state, action) => {
        if (!isPlaceFeatureList(action.payload)) return;
        localStorage.setItem(
          PlaceStorage.Features,
          JSON.stringify(action.payload)
        );
        state.features = action.payload;
      }
    );
  },
});

export default placeSlice.reducer;

export const onStartClient = (dispatch: any) => {
  safeStorageParse<PlaceFeatureListItem[]>(PlaceStorage.Features, (val) => {
    dispatch(placeSlice.actions.setFeatures(val));
  });
};
