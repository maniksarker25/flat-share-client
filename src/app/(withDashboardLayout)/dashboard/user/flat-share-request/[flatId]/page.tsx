"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { getUserInfo } from "@/services/authServices";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FlatShareRequestPage = () => {
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };
  const userInfo = getUserInfo();

  const handleBookingRequest = () => {};
  return (
    <Container>
      <Stack
        sx={{
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 450,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Send Flat Share Request
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <FSForm
              onSubmit={handleBookingRequest}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="Your Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Profession"
                    type="text"
                    name="profession"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
                    value={userInfo?.email}
                  />
                </Grid>

                <Box sx={{ ml: "25px", mt: "10px" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Agreement to terms and conditions"
                    onChange={handleCheckboxChange}
                  />
                </Box>
              </Grid>

              {error && (
                <Box>
                  <Typography color={"red"}>{error}</Typography>
                </Box>
              )}
              <Button
                fullWidth={true}
                sx={{
                  margin: "20px 0px",
                }}
                type="submit"
              >
                Register
              </Button>
            </FSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default FlatShareRequestPage;
