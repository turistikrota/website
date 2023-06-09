import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { CheckEmailFormData, CheckEmailResponse } from "./auth.types";

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
      }),
      transformErrorResponse: (res) => {
        console.log("err:", res);
        return res.data;
      },
    }),
  }),
});

export const { useCheckEmailMutation } = authApi;
