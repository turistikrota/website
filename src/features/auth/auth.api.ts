import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import {
  CheckEmailFormData,
  CheckEmailResponse,
  LoginFormData,
  LoginResponse,
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
  }),
});

export const { useCheckEmailMutation, useLoginMutation } = authApi;
