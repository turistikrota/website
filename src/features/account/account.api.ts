import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    list: builder.query<AnyResponse<any>, any>({
      query: () => ({
        url: "/account",
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    detail: builder.query<AnyResponse<any>, string>({
      query: (userName) => ({
        url: `/account/@${userName}/my`,
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const { useListQuery, useDetailQuery } = accountApi;
