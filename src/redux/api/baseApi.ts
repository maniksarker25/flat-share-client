import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `http://localhost:3500/api`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
