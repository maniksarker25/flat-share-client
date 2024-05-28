import { TResponseSuccess } from "@/types";
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (data) => ({
        url: "/flat",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.flats],
    }),
    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flat",
        method: "GET",
        params: arg,
      }),
      // transformResponse: (response: TResponseSuccess) => {
      //   return response?.data;
      // },
      providesTags: [tagTypes.flats],
    }),
    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flats],
    }),
    getMyFlats: build.query({
      query: () => ({
        url: "/flat/my-flats",
        method: "GET",
      }),
      providesTags: [tagTypes.flats],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatsQuery,
  useDeleteFlatMutation,
  useGetMyFlatsQuery,
} = flatApi;
