import { TFlat } from "@/types/flat";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FlatDetails = ({ flat }: { flat: TFlat }) => {
  return (
    <Container sx={{ mt: "40px" }}>
      <Stack direction={{ md: "row" }} spacing={2}>
        <Box sx={{ width: { md: "65%" }, height: 440, position: "relative" }}>
          <Image
            src={flat?.photos[0]}
            layout="fill"
            objectFit="cover"
            alt="featuredImage"
          />
        </Box>
        <Box
          sx={{
            width: { md: "35%" },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box sx={{ height: 220, position: "relative" }}>
            <Image
              src={flat?.photos[1]}
              layout="fill"
              objectFit="cover"
              alt="photo"
            />
          </Box>
          <Box sx={{ display: "flex", gap: 1, height: 210 }}>
            <Box sx={{ width: "50%", position: "relative" }}>
              <Image
                src={flat?.photos[2]}
                layout="fill"
                objectFit="cover"
                alt="photo"
              />
            </Box>
            <Box sx={{ width: "50%", position: "relative" }}>
              <Image
                src={flat?.photos[3]}
                layout="fill"
                objectFit="cover"
                alt="photo"
              />
            </Box>
          </Box>
        </Box>
      </Stack>
      <Box>
        <Typography my={"20px"}>
          <span style={{ fontWeight: "bold" }}>Detailed Description</span>:{" "}
          {flat?.detailedDescription}
        </Typography>
        <Typography my={"3px"}>
          <span style={{ fontWeight: "bold" }}>Amenities</span>:{" "}
          {flat?.amenities}
        </Typography>
        <Typography my={"3px"}>
          <span style={{ fontWeight: "bold" }}>Location</span>: {flat?.location}
        </Typography>
        <Stack direction={{ md: "row" }} justifyContent={"space-between"}>
          <Box>
            <Typography my={"3px"}>
              <span style={{ fontWeight: "bold" }}>Rent Amount</span>:{" "}
              {flat?.rentAmount}
            </Typography>
            <Typography my={"3px"}>
              <span style={{ fontWeight: "bold" }}>Advanced Amount</span>:{" "}
              {flat?.advancedAmount}
            </Typography>
            <Typography my={"3px"}>
              <span style={{ fontWeight: "bold" }}>Number Of Bedrooms</span>:{" "}
              {flat?.totalBedrooms}
            </Typography>
            <Typography my={"3px"}>
              <span style={{ fontWeight: "bold" }}>Number Of Rooms</span>:{" "}
              {flat?.totalRooms}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "40px",
              border: "2px solid gray",
              maxWidth: "350px",
              maxHeight: "350px",
              display: "flex",
              justifyContent: "center",
              mt: { xs: "20px", md: "0px" },
            }}
          >
            <Button
              component={Link}
              href={`/dashboard/user/flat-share-request/${flat.id}`}
            >
              Send Share Request
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default FlatDetails;
