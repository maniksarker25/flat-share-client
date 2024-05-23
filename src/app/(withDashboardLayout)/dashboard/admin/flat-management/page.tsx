"use client";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { Typography } from "@mui/material";
import FlatTable from "./components/FlatTable";

const FlatManagementPage = () => {
  const { data, isLoading } = useGetAllFlatsQuery({});

  return (
    <div>
      {!isLoading ? (
        <FlatTable flats={data} />
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default FlatManagementPage;
