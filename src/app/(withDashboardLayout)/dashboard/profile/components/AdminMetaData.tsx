import { Box, Stack, Typography } from "@mui/material";

const AdminMetaData = ({ metaData }: any) => {
  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      gap={4}
      sx={{ paddingY: "30px" }}
    >
      <Box
        sx={{
          border: "1px dotted gray",
          paddingY: "10px",
          paddingLeft: "10px",
          paddingRight: "20px",
          minWidth: "150px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
          {metaData?.totalUser}
        </Typography>
        <Typography>Total User</Typography>
      </Box>
      <Box
        sx={{
          border: "1px dotted gray",
          paddingY: "10px",
          paddingLeft: "10px",
          paddingRight: "20px",
          minWidth: "150px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
          {metaData?.totalFlat}
        </Typography>
        <Typography>Total Flat</Typography>
      </Box>
      <Box
        sx={{
          border: "1px dotted gray",
          paddingY: "10px",
          paddingLeft: "10px",
          paddingRight: "20px",
          minWidth: "150px",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
          {metaData?.totalRequest}
        </Typography>
        <Typography>Total Request</Typography>
      </Box>
    </Stack>
  );
};

export default AdminMetaData;
