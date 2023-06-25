import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { AccountCreateFormData, AccountListResponse } from "./account.types";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    list: builder.query<AnyResponse<AccountListResponse>, any>({
      query: () => ({
        url: apiUrl(Services.Account, `/`),
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    detail: builder.query<AnyResponse<any>, string>({
      query: (userName) => ({
        url: apiUrl(Services.Account, `/@${userName}/my`),
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    create: builder.mutation<AnyResponse<any>, AccountCreateFormData>({
      query: (body) => ({
        url: apiUrl(Services.Account, `/`),
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
        url: apiUrl(Services.Account, `/@${body}/my`),
        method: "GET",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    enableMyAccount: builder.mutation<AnyResponse<any>, string>({
      query: (userName) => ({
        url: apiUrl(Services.Account, `/@${userName}/enable`),
        method: "PUT",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    disableMyAccount: builder.mutation<AnyResponse<any>, string>({
      query: (userName) => ({
        url: apiUrl(Services.Account, `/@${userName}/disable`),
        method: "PUT",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    deleteMyAccount: builder.mutation<AnyResponse<any>, string>({
      query: (userName) => ({
        url: apiUrl(Services.Account, `/@${userName}`),
        method: "DELETE",
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
  useEnableMyAccountMutation,
  useDisableMyAccountMutation,
  useDeleteMyAccountMutation,
} = accountApi;
