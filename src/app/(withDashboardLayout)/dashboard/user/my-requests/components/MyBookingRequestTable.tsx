import { TBookingRequest } from "@/types/booking";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import { useEffect, useState } from "react";
const MyBookingRequestTable = ({
  bookingRequests,
}: {
  bookingRequests: TBookingRequest[];
}) => {
  const [updatedBookingRequests, setUpdatedBookingRequests] = useState<any>([]);
  useEffect(() => {
    const updatedData = bookingRequests?.map(
      (bookingRequest: TBookingRequest, index: number) => {
        return {
          sl: index + 1,
          id: bookingRequest.id,
          location: bookingRequest?.flat?.location,
          rentAmount: bookingRequest?.flat?.rentAmount,
          status: bookingRequest?.status,
        };
      }
    );
    setUpdatedBookingRequests(updatedData);
  }, [bookingRequests]);
  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", flex: 1 },
    { field: "location", headerName: "location", flex: 1 },
    { field: "rentAmount", headerName: "Rent Amount", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              //   onClick={() => handleDeleteFlat(row.id)}
              aria-label="delete"
            >
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={updatedBookingRequests} columns={columns} />
    </div>
  );
};

export default MyBookingRequestTable;
