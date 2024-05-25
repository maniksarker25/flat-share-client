"use client";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { zodResolver } from "@hookform/resolvers/zod";
import { flatValidationSchema } from "@/schemas/flat";
import { toast } from "sonner";
import { useCreateFlatMutation } from "@/redux/api/flatApi";
import { useRouter } from "next/navigation";
const PostFlatInfoPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [imgError, setImgError] = useState("");
  const [error, setError] = useState("");
  const [createFlat] = useCreateFlatMutation();
  const router = useRouter();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImgError("");
    const file = event.target.files?.[0];
    if (!file) return;
    console.log(images.length);
    if (images.length < 2) {
      setImgError("You need to upload at least 3 photos.");
    } else {
      setImgError("");
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );
      setImages((prevImages) => [...prevImages, response.data.data.url]);
    } catch (error) {
      console.error("Error uploading image:", error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setImgError(
            `Failed to upload image: ${error.response.data.error.message}`
          );
        } else if (error.request) {
          setImgError("Failed to upload image: No response from server");
        } else {
          setImgError(`Failed to upload image: ${error.message}`);
        }
      } else {
        setImgError("Failed to upload image. Please try again.");
      }
    }
  };
  const handlePostFlatInfo = async (values: FieldValues) => {
    setError("");
    values.squareFeet = Number(values.squareFeet);
    values.totalBedrooms = Number(values.totalBedrooms);
    values.totalRooms = Number(values.totalRooms);
    values.rentAmount = Number(values.rentAmount);
    values.advancedAmount = Number(values.advancedAmount);
    values.photos = images;
    try {
      const res = await createFlat(values);
      if (res?.data?.id) {
        toast.success("Flat post created successfully");
        router.push("/dashboard/user/my-flat-posts");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          // height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
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
                Post Flat Info For Share
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <FSForm
              onSubmit={handlePostFlatInfo}
              resolver={zodResolver(flatValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="SquareFeet"
                    type="number"
                    size="small"
                    fullWidth={true}
                    name="squareFeet"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="Location"
                    type="text"
                    name="location"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="Total Bedrooms"
                    type="number"
                    name="totalBedrooms"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="Total Rooms"
                    type="number"
                    name="totalRooms"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="Rent Amount"
                    type="number"
                    name="rentAmount"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FSInput
                    label="Advanced Amount"
                    type="number"
                    name="advancedAmount"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Amenities"
                    type="text"
                    name="amenities"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FSInput
                    label="Detailed Description"
                    type="text"
                    name="detailedDescription"
                    fullWidth={true}
                  />
                </Grid>

                <Box
                  sx={{
                    mt: "20px",
                    ml: "23px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component={"h6"}
                    textAlign={"start"}
                    my={"10px"}
                  >
                    Upload Flat Photos
                  </Typography>
                  <Grid container spacing={2}>
                    {images.map((image, index) => (
                      <Grid item xs={6} md={4} key={index}>
                        <Box
                          sx={{
                            width: "150px",
                            height: "100px",
                          }}
                        >
                          <Image
                            src={image}
                            alt={`uploaded ${index}`}
                            style={{ height: "100%", width: "100%" }}
                            width={150}
                            height={100}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {imgError && (
                    <Typography color="error" my={"10px"}>
                      {imgError}
                    </Typography>
                  )}
                  <label htmlFor="photo-upload">
                    <Button
                      variant="contained"
                      component="span"
                      sx={{ my: "10px" }}
                    >
                      Upload Photo <AddPhotoAlternateIcon sx={{ ml: "5px" }} />
                    </Button>
                  </label>
                  <input
                    style={{ textAlign: "left", display: "none" }}
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleFileChange}
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
                disabled={images.length < 3}
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

export default PostFlatInfoPage;
