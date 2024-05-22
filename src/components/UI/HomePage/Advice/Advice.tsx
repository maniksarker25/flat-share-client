import { Box, Container, Stack, Typography } from "@mui/material";
import FindSteps from "./FindSteps";
import ShareSteps from "./ShareSteps";

const Advice = () => {
  return (
    <Container sx={{ mt: "50px" }}>
      <Box sx={{ textAlign: "center" }}>
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
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
        mt={"50px"}
      >
        <Box>
          <FindSteps />
        </Box>
        <Box>
          <ShareSteps />
        </Box>
      </Stack>
    </Container>
  );
};

export default Advice;
