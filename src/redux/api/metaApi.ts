import { baseApi } from "./baseApi";

const metaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMetaData: build.query({
      query: () => ({
        url: "/meta",
      }),
    }),
  }),
});

export const { useGetMetaDataQuery } = metaApi;
