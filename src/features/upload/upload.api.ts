import { createApi } from "@reduxjs/toolkit/dist/query";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    uploadAvatar: builder.mutation<any, any>({
         query: (body) => ({
            url: apiUrl(Services.Upload, "/")
         })
    })
  }),
});
