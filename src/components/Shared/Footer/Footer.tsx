import { Box, Container, Stack, Typography } from "@mui/material";
import facebookIcon from "@/assets/images/footer/facebook.png";
import instagramIcon from "@/assets/images/footer/instagram.png";
import linkedinIcon from "@/assets/images/footer/linkedin.png";
import twitterIcon from "@/assets/images/footer/twitter.png";
import logo from "@/assets/images/logo/house-share-logo-icon-design-vector-22925067-removebg-preview.png";
import Link from "next/link";
import Image from "next/image";
import playStore from "@/assets/images/footer/google-play.b670281a.png";
import appStore from "@/assets/images/footer/app-store-apple.b35643c5.png";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5} mt={"100px"}>
      <Container>
        <Stack direction={{ md: "row" }} justifyContent={"space-between"}>
          <Box>
            <Image src={logo} height={100} width={100} alt="logo" />
            <Typography color={"white"} variant="h5" component={"h5"}>
              Flat Share
            </Typography>
            <Typography
              variant="h6"
              component={"h6"}
              fontWeight={500}
              color={"white"}
            >
              Find Your Perfect Flat-mate{" "}
              <Box component={"span"} color="primary.main">
                Today!
              </Box>
            </Typography>
          </Box>
          <Box color={"white"}>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"15px"}
            >
              Useful Links
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Changed to column
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <Link href={"/"}>About Us</Link>
              <Link href={"/"}>Share Flat</Link>
              <Link href={"/"}>Privacy & Policy</Link>
              <Link href={"/"}>Terms & Condition</Link>
            </Box>
          </Box>
          <Box>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"15px"}
            >
              Contact Information
            </Typography>
            <Box color={"white"}>
              <Typography color={"white"}>
                Email: flatshare@gmail.com
              </Typography>
              <Typography color={"white"} sx={{ my: "10px" }}>
                Phone: +8801748545
              </Typography>
              <Typography color={"white"}>Location: Gazipur,Dhaka</Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              color={"white"}
              variant="h6"
              component={"h6"}
              mb={"15px"}
            >
              Follow Us
            </Typography>
            <Stack direction={"row"} gap={2}>
              <Image src={facebookIcon} alt="facebook" width={30} height={30} />
              <Image
                src={instagramIcon}
                alt="facebook"
                width={30}
                height={30}
              />
              <Image src={linkedinIcon} alt="facebook" width={30} height={30} />
              <Image src={twitterIcon} alt="facebook" width={30} height={30} />
            </Stack>
            <Box color={"white"}>
              <Typography color={"white"} mt={"15px"} fontSize={"18px"}>
                Download App
              </Typography>
              <Stack direction={"row"} gap={"10px"} mt={"10px"}>
                <Image
                  src={playStore}
                  width={100}
                  height={100}
                  alt="playStore"
                />
                <Image src={appStore} width={100} height={100} alt="appStore" />
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
            mt: "20px",
          }}
        ></Box>
        <Typography
          component={"p"}
          color={"white"}
          sx={{ mt: "20px" }}
          textAlign={"center"}
        >
          &copy;2024 Flat Share.All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
