import { TFlat } from "@/types/flat";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";

const MyFlatPostTable = ({ flats }: { flats: TFlat[] }) => {
  const columns: GridColDef[] = [
    { field: "squareFeet", headerName: "SquareFeet", flex: 1 },
    { field: "totalBedrooms", headerName: "Number Of Bedrooms", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "rentAmount", headerName: "Rent Amount", flex: 1 },
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
            <Link href={`/dashboard/admin/doctors/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      {" "}
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={flats} columns={columns} />
      </div>
    </div>
  );
};

export default MyFlatPostTable;
