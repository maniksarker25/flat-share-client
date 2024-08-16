"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Stack, Typography } from "@mui/material";

import { useState } from "react";
import Image from "next/image";
import PersonalInformation from "./components/PersonalInformation";
import EditProfile from "./components/EditProfile";
const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetMyProfileQuery({});
  const profileInfo = data?.data;
  console.log(profileInfo);

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
          <PersonalInformation userProfileInfo={profileInfo?.userProfile} />

          <EditProfile userProfileInfo={profileInfo?.userProfile} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfilePage;
