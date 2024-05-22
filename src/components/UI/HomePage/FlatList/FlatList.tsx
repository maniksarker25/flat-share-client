import { Box, Container, Typography } from "@mui/material";

const FlatList = () => {
  return (
    <Container sx={{ mt: "50px" }}>
      <Box>
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
    </Container>
  );
};

export default FlatList;
