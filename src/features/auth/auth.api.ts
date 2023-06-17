import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { User } from "~/types/user";
import {
  CheckEmailFormData,
  CheckEmailResponse,
  LoginFormData,
  LoginResponse,
  ReSendVerificationFormData,
  RegisterFormData,
  RegisterResponse,
  VerifyFailResponse,
  VerifyFormData,
} from "./auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    checkEmail: builder.mutation<
      AnyResponse<CheckEmailResponse>,
      CheckEmailFormData
    >({
      query: (data: CheckEmailFormData) => ({
        url: apiUrl(Services.Auth, "/checkEmail"),
        method: "POST",
        body: data,
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    login: builder.mutation<AnyResponse<LoginResponse>, LoginFormData>({
      query: (data: LoginFormData) => ({
        url: apiUrl(Services.Auth, "/login"),
        method: "POST",
        body: data,
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    register: builder.mutation<AnyResponse<RegisterResponse>, RegisterFormData>(
      {
        query: (data: RegisterFormData) => ({
          url: apiUrl(Services.Auth, "/register"),
          method: "POST",
          body: data,
          credentials: "include",
        }),
        transformErrorResponse: (res) => {
          return res.data;
        },
      }
    ),
    verify: builder.mutation<AnyResponse<VerifyFailResponse>, VerifyFormData>({
      query: (data: VerifyFormData) => ({
        url: apiUrl(Services.Auth, `/${data.token}`),
        method: "POST",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    reSendVerify: builder.mutation<AnyResponse<{}>, ReSendVerificationFormData>(
      {
        query: (data: ReSendVerificationFormData) => ({
          url: apiUrl(Services.Auth, `/re-verify`),
          method: "POST",
          body: data,
          credentials: "include",
        }),
        transformErrorResponse: (res) => {
          return res.data;
        },
      }
    ),
    refresh: builder.mutation<AnyResponse<{}>, {}>({
      query: () => ({
        url: apiUrl(Services.Auth, `/refresh`),
        method: "PUT",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    getCurrent: builder.query<AnyResponse<User>, {}>({
      query: () => ({
        url: apiUrl(Services.Auth, `/`),
        method: "GET",
        credentials: "include",
      }),
      forceRefetch({ state }) {
        // @ts-ignore
        return state.auth.tokens.accessToken == "";
      },
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
    logout: builder.mutation<AnyResponse<{}>, {}>({
      query: () => ({
        url: apiUrl(Services.Auth, `/logout`),
        method: "POST",
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const {
  useCheckEmailMutation,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useReSendVerifyMutation,
  useRefreshMutation,
  useLogoutMutation,
  useGetCurrentQuery,
} = authApi;
