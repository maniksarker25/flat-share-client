"use client";
import { useGetMyBookingRequestsQuery } from "@/redux/api/bookingApi";
import { Box, Typography } from "@mui/material";

import MyBookingRequestTable from "./components/MyBookingRequestTable";

const MyRequestsPage = () => {
  const { data, isLoading } = useGetMyBookingRequestsQuery({});
  return (
    <Box>
      {!isLoading ? (
        data?.length > 0 ? (
          <MyBookingRequestTable bookingRequests={data} />
        ) : (
          <Typography variant="h3" component={"h3"} textAlign={"center"}>
            There is no booking request from you!!
          </Typography>
        )
      ) : (
        <Typography>Loading....</Typography>
      )}
    </Box>
  );
};

export default MyRequestsPage;
