import { Box, Button, IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const UserTable = ({ users }: { users: any }) => {
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
              <Button size="small" sx={{ flex: 1, mt: "5px" }}>
                Make Deactivate
              </Button>
            ) : (
              <Button size="small" sx={{ flex: 1, mt: "5px" }}>
                Make Active
              </Button>
            )}
            {row?.role === "USER" ? (
              <Button size="small" sx={{ mt: "5px" }}>
                Make Admin
              </Button>
            ) : (
              <Button size="small" sx={{ mt: "5px" }}>
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
