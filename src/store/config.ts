import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { Config } from "~/config";
import { RootState } from "./store";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    headers.set(Config.headers.AcceptLang, state.config.locale);
    if (state.auth.tokens.accessToken != "") {
      /*
      headers.set(
        Config.headers.Authorization,
        `Bearer ${state.auth.tokens.accessToken}`
      );
      */
    }
    if (state.auth.tokens.turnstileToken != "") {
      headers.set(
        Config.headers.TurnstileToken,
        state.auth.tokens.turnstileToken
      );
    }
    //headers.set(Config.headers.Credentials, "true");
    return headers;
  },
  credentials: "same-origin",
});
