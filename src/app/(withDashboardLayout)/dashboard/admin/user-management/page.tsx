"use client";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import UserTable from "./components/UserTable";
import { Typography } from "@mui/material";

const UserManagementPage = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  return (
    <div>
      {!isLoading ? (
        <UserTable users={data} />
      ) : (
        <Typography>Loading....</Typography>
      )}
    </div>
  );
};

export default UserManagementPage;
