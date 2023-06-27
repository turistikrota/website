import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { FileUploadedResponse } from "./upload.types";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    uploadAvatar: builder.mutation<AnyResponse<FileUploadedResponse>, FormData>(
      {
        query: (body) => ({
          url: apiUrl(Services.Upload, `/@${body.get("username")}`),
          method: "POST",
          credentials: "include",
          body,
        }),
        transformErrorResponse: (res) => {
          return res.data;
        },
      }
    ),
  }),
});

export const { useUploadAvatarMutation } = uploadApi;
