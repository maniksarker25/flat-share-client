import { TFlat } from "@/types/flat";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import Image from "next/image";
import { useDeleteFlatMutation } from "@/redux/api/flatApi";
import { toast } from "sonner";

const MyFlatPostTable = ({ flats }: { flats: TFlat[] }) => {
  const [deleteFlat] = useDeleteFlatMutation();
  const handleDeleteFlat = async (id: string) => {
    try {
      const res = await deleteFlat(id).unwrap();

      if (res?.success) {
        toast.success("Flat deleted successfully");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };
  const columns: GridColDef[] = [
    {
      field: "photos",
      headerName: "Photo",
      flex: 1,

      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              mt: "8px",
            }}
          >
            <Image src={row?.photos[0]} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },
    { field: "squareFeet", headerName: "SquareFeet", flex: 1 },
    { field: "totalBedrooms", headerName: "Number Of Bedrooms", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "rentAmount", headerName: "Rent Amount", flex: 1 },
    { field: "advancedAmount", headerName: "Advanced Amount", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton aria-label="delete">
              <Link href={`my-flat-posts/edit/${row?.id}`}>
                <EditIcon sx={{ color: "blue" }} />
              </Link>
            </IconButton>
            <IconButton
              onClick={() => handleDeleteFlat(row.id)}
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
    <div>
      {" "}
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid rows={flats} columns={columns} hideFooterPagination />
      </div>
    </div>
  );
};

export default MyFlatPostTable;
