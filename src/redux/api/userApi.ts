import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.users],
    }),
  }),
});

export const { useGetAllUserQuery } = userApi;
