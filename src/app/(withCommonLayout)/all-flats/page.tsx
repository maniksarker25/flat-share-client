import FlatCard from "@/components/UI/HomePage/FlatList/FlatCard";
import { TFlat } from "@/types/flat";
import { Box, Container, Grid, Typography } from "@mui/material";

const AllFlatPage = async () => {
  const res = await fetch("https://flat-share-server-six.vercel.app/api/flat", {
    next: {
      revalidate: 30,
    },
  });
  const { data: flats } = await res.json();
  return (
    <Container>
      <Box sx={{ my: "30px" }}>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
        >
          Explore Available Flats
        </Typography>
        <Typography>
          Explore our top flat listings and find your ideal living space today
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: "20px" }}>
        {flats?.map((flat: TFlat, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlatCard key={index} flat={flat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllFlatPage;
