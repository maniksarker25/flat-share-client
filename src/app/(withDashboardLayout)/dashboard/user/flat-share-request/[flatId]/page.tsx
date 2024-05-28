"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useCreateBookingRequestMutation } from "@/redux/api/bookingApi";
import { bookingRequestValidationSchema } from "@/schemas/bookingRequest";
import { getUserInfo } from "@/services/authServices";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TParams = {
  flatId: string;
};

const FlatShareRequestPage = ({ params }: { params: TParams }) => {
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const [createBookingRequest] = useCreateBookingRequestMutation();
  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };
  const flatId = params?.flatId;
  const userInfo = getUserInfo();

  const handleBookingRequest = async (values: FieldValues) => {
    setError("");
    if (isChecked) {
      try {
        const bookingRequestValues = {
          flatId,
          name: values?.name,
          profession: values?.profession,
          email: userInfo?.email,
        };
        const res = await createBookingRequest(bookingRequestValues).unwrap();
        console.log(res);
        if (res?.success) {
          toast.success("Booking request send successfully");
          router.push("/dashboard/user/my-requests");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    } else {
      setError("Please accept our terms and conditions");
    }
  };
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
              resolver={zodResolver(bookingRequestValidationSchema)}
              defaultValues={{ email: userInfo?.email }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12}>
                  <FSInput
                    label="Your Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                    name="name"
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
                Submit
              </Button>
            </FSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default FlatShareRequestPage;
