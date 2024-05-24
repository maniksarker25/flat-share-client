import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" component="p" paragraph>
          Welcome to FlatShare, the easiest way to find and share a flat! Our
          mission is to help people connect and create comfortable living spaces
          together.
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Paper
          sx={{
            padding: 4,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="body1" component="p" paragraph>
            At FlatShare, we believe in making living together as easy and
            enjoyable as possible. Whether you're looking for a new place to
            live or someone to share your flat with, we're here to help. Our
            platform connects you with like-minded individuals to create a
            harmonious living environment.
          </Typography>
        </Paper>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Vision
        </Typography>
        <Paper
          sx={{
            padding: 4,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="body1" component="p" paragraph>
            Our vision is to become the go-to platform for finding and sharing
            flats globally. We aim to foster a community where people can find
            reliable and friendly flatmates, ensuring a smooth and enjoyable
            living experience for everyone involved.
          </Typography>
        </Paper>
      </Box>
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose Us
        </Typography>
        <Paper
          sx={{
            padding: 4,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="body1" component="p" paragraph>
            At FlatShare, we provide an easy-to-use platform with advanced
            search filters, verified user profiles, and secure messaging. We are
            committed to helping you find the perfect flatmate and living
            situation with ease and peace of mind.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutPage;
