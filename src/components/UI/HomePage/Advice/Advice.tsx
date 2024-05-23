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
          Advice for finding and sharing flats
        </Typography>
        <Typography>
          Unlock the secrets to successful flat hunting and sharing. Navigate
          the rental landscape with expert tips and insider advice
        </Typography>
      </Box>
      <Stack
        direction={{ md: "row" }}
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
