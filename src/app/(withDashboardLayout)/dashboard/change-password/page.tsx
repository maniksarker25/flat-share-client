"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useChangePasswordMutation } from "@/redux/api/userApi";
import { changePasswordValidationSchema } from "@/schemas/password";
import { logoutUser } from "@/services/actions/logoutUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
  const [error, setError] = useState("");
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const handleChangePassword = async (values: FieldValues) => {
    if (values.newPassword === values.retypeNewPassword) {
      try {
        const res = await changePassword(values).unwrap();
        // console.log(res);
        if (res?.success) {
          toast.success("Password Changed Successfully");
          logoutUser(router);
        } else {
          toast.error("Current password is incorrect");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      setError("New password and retype new password is not matched");
    }
  };
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
              resolver={zodResolver(changePasswordValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="Current Password"
                    type="password"
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
