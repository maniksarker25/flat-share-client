import { baseApi } from "./baseApi";

const flatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flat",
        method: "GET",
        params: arg,
      }),
    }),
  }),
});

export const { useGetAllFlatsQuery } = flatApi;
