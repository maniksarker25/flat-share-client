import { Box, Button, IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import {
  useChangeStatusMutation,
  useChangeUserRoleMutation,
} from "@/redux/api/userApi";
import { toast } from "sonner";

const UserTable = ({ users }: { users: any }) => {
  const [changeStatus] = useChangeStatusMutation();
  const [changeUserRole] = useChangeUserRoleMutation();

  // change status
  const handleChangeUserStatus = async (userId: string, status: string) => {
    try {
      const res = await changeStatus({
        userId,
        body: { status },
      });
      if (res?.data?.id) {
        toast.success("User status updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // change role
  const handleChangeUserRole = async (userId: string, role: string) => {
    try {
      const res = await changeUserRole({
        userId,
        body: { role },
      }).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("User role updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };

  const columns: GridColDef[] = [
    { field: "username", headerName: "User Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction={"row"} gap={1}>
            {row?.status === "ACTIVE" ? (
              <Button
                onClick={() => handleChangeUserStatus(row?.id, "DEACTIVATE")}
                size="small"
                sx={{ flex: 1, mt: "5px" }}
              >
                Make Deactivate
              </Button>
            ) : (
              <Button
                onClick={() => handleChangeUserStatus(row?.id, "ACTIVE")}
                size="small"
                sx={{ flex: 1, mt: "5px" }}
              >
                Make Active
              </Button>
            )}
            {row?.role === "USER" ? (
              <Button
                onClick={() => handleChangeUserRole(row?.id, "ADMIN")}
                size="small"
                sx={{ mt: "5px" }}
              >
                Make Admin
              </Button>
            ) : (
              <Button
                onClick={() => handleChangeUserRole(row?.id, "USER")}
                size="small"
                sx={{ mt: "5px" }}
              >
                Make User
              </Button>
            )}
          </Stack>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={users} columns={columns} />
    </div>
  );
};

export default UserTable;
