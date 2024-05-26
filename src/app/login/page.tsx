"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { authKey } from "@/constants/auth";
import { loginValidationSchema } from "@/schemas/login";
import { loginUser } from "@/services/actions/loginUser";
import setAccessTokenToCookies from "@/services/actions/setAccessTokenToCookie";
import { storeUserInfo } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      if (res?.success) {
        storeUserInfo(res?.data?.token);
        setAccessTokenToCookies(res?.data?.token, {
          redirect: "/",
        });
        toast.success("User login successfully");

        router.push("/");
      } else {
        setError(res?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
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
                Login
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <FSForm
              onSubmit={handleLogin}
              resolver={zodResolver(loginValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                    name="email"
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
              </Grid>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                textAlign={"end"}
                component="p"
                fontWeight={600}
              >
                Forget Password
              </Typography>
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
                Don&apos;t have an account?
                <Link style={{ color: "#1586FD" }} href={"/register"}>
                  Create an account
                </Link>
              </Typography>
            </FSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
