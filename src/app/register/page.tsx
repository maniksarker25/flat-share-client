"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { registerUser } from "@/services/actions/registerUser";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/schemas/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    console.log(values);
    if (values?.password === values?.confirmPassword) {
      const registerValues = {
        username: values?.username,
        email: values?.email,
        password: values?.password,
      };
      const res = await registerUser(registerValues);

      if (res?.success) {
        toast.success("User registration successful");
        router.push("/");
      } else {
        toast.error(res.message);
      }
    } else {
      setError("Password and confirm password do not match");
    }
  };
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
            <FSForm
              onSubmit={handleRegister}
              resolver={zodResolver(registerValidationSchema)}
            >
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
                Register
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
