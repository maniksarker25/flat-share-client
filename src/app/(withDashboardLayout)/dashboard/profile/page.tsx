"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditProfileModal from "./components/EditProfileModal";
import { useState } from "react";
import Image from "next/image";
import { FieldValues } from "react-hook-form";
import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetMyProfileQuery({});
  const profileInfo = data?.data;

  const handleProfileEdit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    // <Box sx={{ display: "flex", justifyContent: "center" }}>
    //   <Box
    //     sx={{
    //       padding: "20px",
    //       borderRadius: "10px",
    //       backgroundColor: "#fff",
    //       width: "100%",
    //       maxWidth: { md: "500px" },
    //       border: "1px solid gray",
    //     }}
    //   >
    //     <Box sx={{}}>
    //       {/* <Box
    //       sx={{
    //         width: "150px",
    //         height: "150px",
    //         position: "relative",
    //         borderRadius: "50%",
    //         overflow: "hidden",
    //         margin: "0px auto",
    //       }}
    //     >
    //       <Image
    //         src={data?.profilePhoto}
    //         width={150}
    //         height={150}
    //         alt="profilePhoto"
    //       />
    //     </Box>
    //     <Box
    //       sx={{
    //         marginLeft: "200px",
    //         marginTop: "-50px",
    //       }}
    //     >
    //       {updating ? (
    //         <CircularProgress
    //           size={24}
    //           sx={{
    //             backgroundColor: "#fff",
    //             borderRadius: "100%",
    //             padding: "5px",
    //           }}
    //         />
    //       ) : (
    //         <AutoFileUploader
    //           name="file"
    //           label=""
    //           variant="outlined"
    //           sx={{
    //             backgroundColor: "#fff",
    //             borderRadius: "100%",
    //             border: "none",
    //             ":hover": { border: "none", backgroundColor: "#fff" },
    //           }}
    //           icon={<CameraAltIcon />}
    //           onFileUpload={handleProfilePhotoChange}
    //         />
    //       )}
    //     </Box> */}

    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "end",
    //         }}
    //       >
    //         <EditNoteIcon
    //           onClick={() => setOpen(true)}
    //           sx={{ cursor: "pointer" }}
    //         />
    //       </Box>
    //       <Box
    //         sx={{
    //           textAlign: "center",
    //           mt: "35px",
    //         }}
    //       >
    //         <Typography fontSize={"20px"} fontWeight={600}>
    //           Username: {profileInfo?.username}
    //         </Typography>
    //         <Typography>Email: {profileInfo?.email}</Typography>
    //       </Box>
    //     </Box>
    //     <Box
    //       sx={{
    //         mt: "15px",
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "center",
    //           borderBottom: "1px solid gray",
    //           paddingBottom: "5px",
    //           mb: "10px",
    //         }}
    //       >
    //         <Typography fontWeight={600}>Status:</Typography>
    //         <Typography>{profileInfo?.status}</Typography>
    //       </Box>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "center",
    //           borderBottom: "1px solid gray",
    //           paddingBottom: "5px",
    //           mb: "10px",
    //         }}
    //       >
    //         <Typography fontWeight={600}>Role:</Typography>
    //         <Typography>{profileInfo?.role}</Typography>
    //       </Box>

    //       <Box
    //         sx={{
    //           textAlign: "center",
    //         }}
    //       ></Box>
    //     </Box>
    //   </Box>
    //   <EditProfileModal
    //     open={open}
    //     setOpen={setOpen}
    //     profileData={profileInfo}
    //   />
    // </Box>
    <Box>
      <Box
        sx={{
          maxWidth: "1200px",
          marginX: "auto",
        }}
      >
        <Box sx={{ backgroundColor: "#F7F9FB", padding: "30px", mb: "20px" }}>
          <Stack
            direction={{ lg: "row" }}
            justifyContent={"space-between"}
            gap={4}
          >
            <Stack direction={"row"} alignItems={"center"} gap={3}>
              <Image
                style={{
                  borderRadius: "100%",
                  width: "120px",
                  height: "120px",
                }}
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                width={200}
                height={200}
                alt="ProfileImage"
              />
              <Box>
                <Typography variant="h4" component={"h4"}>
                  {profileInfo?.username}
                </Typography>
                <Typography sx={{ fontSize: "22px", color: "gray" }}>
                  {profileInfo?.email}
                </Typography>
                <Typography sx={{ fontSize: "18px", color: "gray" }}>
                  Role:{profileInfo?.role}
                </Typography>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              gap={4}
              sx={{ paddingY: "30px" }}
            >
              <Box
                sx={{
                  border: "1px dotted gray",
                  paddingY: "10px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                  minWidth: "150px",
                  borderRadius: "5px",
                }}
              >
                <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
                  45
                </Typography>
                <Typography>Total Flat</Typography>
              </Box>
              <Box
                sx={{
                  border: "1px dotted gray",
                  paddingY: "10px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                  minWidth: "150px",
                  borderRadius: "5px",
                }}
              >
                <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
                  45
                </Typography>
                <Typography>Total Flat</Typography>
              </Box>
              <Box
                sx={{
                  border: "1px dotted gray",
                  paddingY: "10px",
                  paddingLeft: "10px",
                  paddingRight: "20px",
                  minWidth: "150px",
                  borderRadius: "5px",
                }}
              >
                <Typography sx={{ fontSize: "30px", fontWeight: "700px" }}>
                  45
                </Typography>
                <Typography>Total Flat</Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Stack direction={{ lg: "row" }} gap={5}>
          <Box
            sx={{
              backgroundColor: "#F7F9FB",
              padding: "30px",
              width: { lg: "35%" },
              minHeight: "300px",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ mb: "25px" }}
            >
              <Typography fontWeight={700}>Personal Information</Typography>
              <Typography>Edit</Typography>
            </Stack>
            <Typography color={"gray"}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Typography>
            <Box sx={{ mt: "25px" }}>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyItems={"center"}
                mb={1.5}
              >
                <svg
                  style={{ stroke: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                <Typography fontWeight={600}>Profession:</Typography>
                <Typography>Web Developer</Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyItems={"center"}
                mb={1.5}
              >
                <svg
                  style={{ stroke: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <Typography fontWeight={600}>Address:</Typography>
                <Typography>Dhaka ,Bangladesh</Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyItems={"center"}
                mb={1.5}
              >
                <svg
                  style={{ stroke: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>

                <Typography fontWeight={600}>Education:</Typography>
                <Typography>Dhaka University</Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyItems={"center"}
                mb={1.5}
              >
                <svg
                  style={{ stroke: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>

                <Typography fontWeight={600}>Phone:</Typography>
                <Typography>+88 01775770439</Typography>
              </Stack>
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                justifyItems={"center"}
                mb={1.5}
              >
                <svg
                  style={{ stroke: "gray" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <Typography fontWeight={600}>Email:</Typography>
                <Typography>manik@gmail.com</Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F7F9FB",
              padding: "30px",
              width: { lg: "65%" },
              minHeight: "300px",
            }}
          >
            <Typography fontSize={"22px"} fontWeight={600} mb={3}>
              Edit Profile
            </Typography>
            <FSForm onSubmit={handleProfileEdit}>
              <FSInput name="bio" label="Enter your bio" fullWidth />
              <Stack direction={{ lg: "row" }} gap={1} mt={3}>
                <FSInput
                  name="profession"
                  label="Enter you profession"
                  fullWidth
                />
                <FSInput name="address" label="Enter your address" fullWidth />
              </Stack>
              <Stack direction={{ lg: "row" }} gap={1} mt={3}>
                <FSInput
                  name="education"
                  label="Enter you education"
                  fullWidth
                />
                <FSInput name="phone" label="Enter your phone" fullWidth />
              </Stack>
              <Box sx={{ mt: 3 }}>
                <FSInput name="email" label="Enter your email" fullWidth />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end", mt: "15px" }}>
                <Button type="submit">Submit</Button>
              </Box>
            </FSForm>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfilePage;
