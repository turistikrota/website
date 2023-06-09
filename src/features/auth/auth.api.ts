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

/*
      queryFn: async ({
        email,
        turnstileToken,
      }: CheckEmailFormData): Promise<any> => {
        const http = getHttp();
        const res = await http
          .post(
            "/auth/checkEmail",
            { email: email },
            http.makeHeaders(Config.headers.TurnstileToken, turnstileToken)
          )
          .catch(http.onError);
        if (
          res &&
          res.status < 300 &&
          res.data &&
          typeof res.data.exists !== "undefined"
        ) {
          return {
            data: res.data.exists,
            error: null,
          };
        }
        return {
          error: res?.data ?? res?.data?.message ?? res?.statusText,
        };
      },
*/

export const { useCheckEmailMutation } = authApi;
