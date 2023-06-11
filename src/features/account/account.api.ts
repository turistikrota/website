import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { AccountCreateFormData, AccountListResponse } from "./account.types";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    list: builder.query<AnyResponse<AccountListResponse>, any>({
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
    create: builder.mutation<AnyResponse<any>, AccountCreateFormData>({
      query: (body) => ({
        url: "/account",
        method: "POST",
        credentials: "include",
        body,
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    getMyAccount: builder.query<AnyResponse<any>, string>({
      query: (body) => ({
        url: `/account/@${body}/my`,
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const {
  useListQuery,
  useDetailQuery,
  useCreateMutation,
  useGetMyAccountQuery,
} = accountApi;
