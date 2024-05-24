"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

const ChangePasswordPage = () => {
  const [error, setError] = useState("");
  const handleChangePassword = async () => {};
  return (
    <Container>
      <Stack
        sx={{
          height: "80vh",
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
                Change Password
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <FSForm
              onSubmit={handleChangePassword}
              // resolver={zodResolver(registerValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="Current Password"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="currentPassword"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="New Password"
                    type="password"
                    name="newPassword"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Re-type New Password"
                    type="password"
                    name="retypeNewPassword"
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
                Submit
              </Button>
            </FSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default ChangePasswordPage;
