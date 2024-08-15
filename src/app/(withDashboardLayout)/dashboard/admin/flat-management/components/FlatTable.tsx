import { TFlat } from "@/types/flat";
import { Box, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteFlatMutation } from "@/redux/api/flatApi";
import { toast } from "sonner";
import Image from "next/image";
import { TMeta } from "@/types";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
const FlatTable = ({
  flats,
  meta,
  page,
  setPage,
  limit,
}: {
  flats: TFlat[];
  meta: TMeta;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}) => {
  let pageCount: number;
  if (meta?.total) {
    pageCount = Math.ceil(meta.total / limit);
  }
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
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Link href={`flat-management/edit/${row.id}`}>
              <IconButton aria-label="delete">
                <EditIcon sx={{ color: "blue" }} />
              </IconButton>
            </Link>
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
  // handle pagination change
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={flats}
        columns={columns}
        hideFooterPagination
        slots={{
          footer: () => {
            return (
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  color="primary"
                  count={pageCount}
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            );
          },
        }}
      />
    </div>
  );
};

export default FlatTable;
