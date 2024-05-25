import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBookingRequest: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/booking-request",
          method: "POST",
          data,
        };
      },
      invalidatesTags: [tagTypes.bookingRequests],
    }),
    getMyBookingRequests: build.query({
      query: () => ({
        url: "/booking-request/my-booking-requests",
        method: "GET",
      }),
      providesTags: [tagTypes.bookingRequests],
    }),
  }),
});

export const { useCreateBookingRequestMutation, useGetMyBookingRequestsQuery } =
  bookingApi;
