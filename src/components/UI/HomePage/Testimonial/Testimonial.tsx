"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import { Box, Container, Stack, SxProps, Typography } from "@mui/material";
import person1 from "@/assets/images/testimonial/person1.png";
import person2 from "@/assets/images/testimonial/person2.jpg";
import person3 from "@/assets/images/testimonial/person3.jpg";
import person4 from "@/assets/images/testimonial/person4.png";

const reviewItems = [
  {
    name: "Sara Johnson",
    review:
      "I found my ideal flatmate through this platform! The search filters were incredibly helpful.",
    image: person1,
  },
  {
    name: "Michael Adams",
    review:
      "As a landlord, I've had a fantastic experience using this website to find reliable tenants for my property.",
    image: person3,
  },
  {
    name: "Nancy",
    review:
      "Thanks to this website, I found a great flat in a location that suits my needs perfectly.",
    image: person2,
  },
  {
    name: "Daniel Brown",
    review:
      "I was hesitant about sharing a flat with strangers, but this platform made the process so easy. I connected with like-minded individuals",
    image: person4,
  },
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
    <Container sx={{ mt: "100px" }}>
      <Box sx={{ textAlign: "center" }} mb={"30px"}>
        <Typography
          variant="h5"
          component={"h5"}
          fontWeight={550}
          fontSize={"28px"}
        >
          Testimonial
        </Typography>
        <Typography>
          See why our clients love us. Real stories, real satisfaction
        </Typography>
      </Box>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "150px",
                  height: "150px",
                }}
              >
                <Image
                  src={currentItem?.image}
                  alt="image"
                  width={150}
                  height={100}
                  style={{ borderRadius: "100%" }}
                />
              </Box>
            </Box>
            <Typography
              textAlign={"center"}
              variant="h5"
              component={"h5"}
              my={"5px"}
            >
              {currentItem.name}
            </Typography>
            <Typography textAlign={"center"} maxWidth={500}>
              {currentItem.review}
            </Typography>
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
