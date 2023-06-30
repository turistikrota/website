import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";

export const placeApi = createApi({
  reducerPath: "placeApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    list: builder.query<any, any>({
      query: () => ({
        url: apiUrl(Services.Place, "/"),
        method: "POST",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const { useListQuery } = placeApi;
