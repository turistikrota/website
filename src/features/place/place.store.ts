import { createSlice } from "@reduxjs/toolkit";

interface PlaceState {}

const initialState: PlaceState = {};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {},
});

export default placeSlice.reducer;
