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
    changeStatus: build.mutation({
      query: (data) => {
        console.log(data?.userId);
        console.log(data?.body);
        return {
          url: `/user/change-status/${data?.userId}`,
          method: "PATCH",
          data: data?.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const { useGetAllUserQuery, useChangeStatusMutation } = userApi;
