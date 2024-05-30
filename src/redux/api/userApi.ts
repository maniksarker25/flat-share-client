import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
      providesTags: [tagTypes.users],
    }),
    changeStatus: build.mutation({
      query: (data) => {
        return {
          url: `/user/change-status/${data?.userId}`,
          method: "PATCH",
          data: data?.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    changeUserRole: build.mutation({
      query: (data) => {
        return {
          url: `/user/change-role/${data?.userId}`,
          method: "PATCH",
          data: data?.body,
        };
      },
      invalidatesTags: [tagTypes.users],
    }),
    getMyProfile: build.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/user/change-password",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.users],
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: "/user/update-profile",
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useChangeStatusMutation,
  useChangeUserRoleMutation,
  useGetMyProfileQuery,
  useChangePasswordMutation,
  useUpdateProfileMutation,
} = userApi;
