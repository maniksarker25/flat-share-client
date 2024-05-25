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
      //   invalidatesTags: [tagTypes.bookingRequests],
    }),
  }),
});

export const { useCreateBookingRequestMutation } = bookingApi;
