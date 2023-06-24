import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";
import { AnyResponse } from "~/types/response/response.types";
import { FileUploadedResponse, UploadAvatarFormData } from "./upload.types";

export const uploadApi = createApi({
  reducerPath: "uploadApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    uploadAvatar: builder.mutation<
      AnyResponse<FileUploadedResponse>,
      UploadAvatarFormData
    >({
      query: (body) => ({
        url: apiUrl(Services.Upload, `/@${body.username}`),
        method: "POST",
        credentials: "include",
        body,
        formData: true,
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const { useUploadAvatarMutation } = uploadApi;
