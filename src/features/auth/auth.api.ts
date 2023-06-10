import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
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
        url: "/auth/checkEmail",
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
        url: "/auth/login",
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
          url: "/auth/register",
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
        url: `/auth/${data.token}`,
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
          url: "/auth/re-verify",
          method: "POST",
          body: data,
          credentials: "include",
        }),
        transformErrorResponse: (res) => {
          return res.data;
        },
      }
    ),
  }),
});

export const {
  useCheckEmailMutation,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useReSendVerifyMutation,
} = authApi;
