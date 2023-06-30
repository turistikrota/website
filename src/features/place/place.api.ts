import { createApi } from "@reduxjs/toolkit/query/react";
import { Services, apiUrl } from "~/static/api";
import { baseQuery } from "~/store/config";
import { PaginationRequest } from "~/types/request/request.types";
import { AnyResponse, ListResponse } from "~/types/response/response.types";
import { PlaceFilterRequest, PlaceListItem } from "./place.types";

export const placeApi = createApi({
  reducerPath: "placeApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    list: builder.mutation<
      AnyResponse<ListResponse<PlaceListItem>>,
      PaginationRequest<PlaceFilterRequest>
    >({
      query: (values) => ({
        url: apiUrl(
          Services.Place,
          `/?page=${values.page ?? 1}&limit=${values.limit ?? 100}`
        ),
        method: "POST",
        body: values.filter,
        credentials: "include",
      }),
      transformErrorResponse: (res) => {
        return res.data;
      },
    }),
  }),
});

export const { useListMutation } = placeApi;
