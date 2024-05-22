"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {};
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
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
                Create Account
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <FSForm onSubmit={handleLogin}>
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="User Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    fullWidth={true}
                  />
                </Grid>
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
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Already have an account?
                <Link style={{ color: "#1586FD" }} href={"/login"}>
                  Login
                </Link>
              </Typography>
            </FSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
