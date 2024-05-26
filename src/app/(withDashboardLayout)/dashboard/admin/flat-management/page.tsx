"use client";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { Typography } from "@mui/material";
import FlatTable from "./components/FlatTable";

const FlatManagementPage = () => {
  const { data } = useGetAllFlatsQuery({});
  const isLoading = false;
  console.log(data);
  return (
    <div>
      {!isLoading && data?.length > 0 ? (
        <FlatTable flats={data} />
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default FlatManagementPage;
