"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import img1 from "@/assets/images/banner/grown-up-flat-share-1582411119__1_-removebg-preview.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// Array of objects containing name, review description, and image
const reviewItems = [
  {
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet leo vel magna volutpat, nec efficitur quam tincidunt.",
    image: img1,
  },
  {
    name: "Jane Smith",
    review:
      "Nullam congue, sem eget sollicitudin malesuada, augue tellus eleifend mi, quis feugiat odio justo vel purus.",
    image: img1,
  },
  {
    name: "Jane Smith",
    review:
      "Nullam congue, sem eget sollicitudin malesuada, augue tellus eleifend mi, quis feugiat odio justo vel purus.",
    image: img1,
  },
  {
    name: "Jane Smith",
    review:
      "Nullam congue, sem eget sollicitudin malesuada, augue tellus eleifend mi, quis feugiat odio justo vel purus.",
    image: img1,
  },
  {
    name: "Jane Smith",
    review:
      "Nullam congue, sem eget sollicitudin malesuada, augue tellus eleifend mi, quis feugiat odio justo vel purus.",
    image: img1,
  },

  // Add more items as needed
];

export default function Testimonial() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Get the current review item based on activeStep
  const currentItem = reviewItems[activeStep];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          //   justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={currentItem?.image}
                alt="image"
                width={300}
                height={300}
              />
            </Box>
            <Typography textAlign={"center"}>{currentItem.name}</Typography>
            <Typography textAlign={"center"}>{currentItem.review}</Typography>
          </div>
          <MobileStepper
            variant="dots"
            steps={reviewItems.length}
            position="static"
            activeStep={activeStep}
            sx={{
              maxWidth: 400,
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              mt: "40px",
            }}
            nextButton={
              <Button
                variant="outlined"
                size="small"
                onClick={handleNext}
                disabled={activeStep === reviewItems.length - 1}
              >
                {/* Next */}
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                variant="outlined"
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                {/* Back */}
              </Button>
            }
          />
        </Stack>
      </Box>
    </Container>
  );
}
