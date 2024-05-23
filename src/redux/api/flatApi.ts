import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flat",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.flats],
    }),
    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flat/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flats],
    }),
  }),
});

export const { useGetAllFlatsQuery, useDeleteFlatMutation } = flatApi;
