import { createApi } from "@reduxjs/toolkit/query/react";
import { Config } from "~/config";
import { getHttp } from "~/hooks/http/http";
import { baseQuery } from "~/store/config";
import { CheckEmailFormData } from "./auth.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    checkEmail: builder.mutation({
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
    }),
  }),
});

export const { useCheckEmailMutation } = authApi;
