"use client";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import { Typography } from "@mui/material";
import FlatTable from "./components/FlatTable";
import { useState } from "react";

const FlatManagementPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const query: Record<string, any> = {};

  query["page"] = page;
  query["limit"] = limit;
  const { data, isLoading } = useGetAllFlatsQuery({ ...query });
  return (
    <div>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : data?.data?.length > 0 ? (
        <FlatTable
          flats={data?.data}
          meta={data?.meta}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      ) : (
        <Typography variant="h4" component={"h4"} textAlign={"center"}>
          There is no flat{" "}
        </Typography>
      )}
    </div>
  );
};

export default FlatManagementPage;
