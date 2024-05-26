"use client";
import { useGetMyFlatsQuery } from "@/redux/api/flatApi";
import MyFlatPostTable from "./components/MyFlatPostTable";
import { Typography } from "@mui/material";

const MyFlatPosts = () => {
  const { data, isLoading } = useGetMyFlatsQuery({});
  console.log(data);
  return (
    <div>
      {" "}
      {!isLoading ? (
        data?.length > 0 ? (
          <MyFlatPostTable flats={data} />
        ) : (
          <Typography variant="h3" component={"h3"} textAlign={"center"}>
            There is no flat share post from you!!
          </Typography>
        )
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default MyFlatPosts;
