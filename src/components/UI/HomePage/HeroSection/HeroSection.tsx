import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import banner from "@/assets/images/banner/grown-up-flat-share-1582411119__1_-removebg-preview.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <Container>
      <Stack
        direction={{ lg: "row" }}
        gap={"20px"}
        justifyItems={"center"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mt: "50px" }}
      >
        <Box width={"100%"}>
          <Typography variant="h3" component={"h2"} fontWeight={500}>
            Find Your Perfect Flat-mate{" "}
            <Box component={"span"} color="primary.main">
              Today!
            </Box>
          </Typography>
          <Typography sx={{ my: "10px", fontSize: "18px" }}>
            Discover the ideal companion to share your living space with ease
            and comfort. Our platform connects you with like-minded individuals,
            simplifying your search for the perfect flat-mate
          </Typography>
          <Box
            sx={{
              mt: "40px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button component={Link} href="/dashboard/user/post-flat-info">
              Share Your Flat
            </Button>
            <Button variant="outlined" component={Link} href="/about-us">
              About Us
            </Button>
          </Box>
        </Box>
        <Box width={"100%"}>
          <Image src={banner} alt="banner" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;
