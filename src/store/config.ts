import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    headers.set("Accept-Language", state.config.locale);
    if (state.auth.tokens.accessToken != "") {
      headers.set("Authorization", `Bearer ${state.auth.tokens.accessToken}`);
    }
    return headers;
  },
});
