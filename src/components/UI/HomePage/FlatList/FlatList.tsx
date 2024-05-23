import { Box, Container, Grid, Typography } from "@mui/material";
import FlatCard from "./FlatCard";
import { TFlat } from "@/types/flat";

const FlatList = async () => {
  const res = await fetch("http://localhost:3500/api/flats");
  const { data: flats } = await res.json();
  console.log(flats);
  return (
    <Container sx={{ mt: "100px" }}>
      <Box>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
          textAlign={"center"}
        >
          Explore Available Flats
        </Typography>
        <Typography textAlign={"center"}>
          Explore our top flat listings and find your ideal living space today
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "space-between", mt: "20px" }}
        >
          {flats?.slice(0, 3)?.map((flat: TFlat, index: number) => (
            <Grid item md={4} key={index}>
              <FlatCard key={index} flat={flat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FlatList;
