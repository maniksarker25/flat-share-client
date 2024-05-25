import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBookingRequest: build.mutation({
      query: () => ({
        url: "/booking-request",
        method: "POST",
      }),
      invalidatesTags: [tagTypes.bookingRequests],
    }),
  }),
});

export const { useCreateBookingRequestMutation } = bookingApi;
