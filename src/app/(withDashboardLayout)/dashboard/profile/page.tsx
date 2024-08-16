"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Stack, Typography } from "@mui/material";

import { useState } from "react";
import Image from "next/image";
import PersonalInformation from "./components/PersonalInformation";
import EditProfile from "./components/EditProfile";
import UserMetaData from "./components/UserMetaData";
import AdminMetaData from "./components/AdminMetaData";
import { useGetMetaDataQuery } from "@/redux/api/metaApi";
const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { data } = useGetMyProfileQuery({});
  const profileInfo = data?.data;
  const { data: metaData } = useGetMetaDataQuery(undefined);

  return (
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
            {/* <Stack
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
            </Stack> */}
            {profileInfo?.role === "USER" ? (
              <UserMetaData metaData={metaData?.data} />
            ) : (
              <AdminMetaData metaData={metaData?.data} />
            )}
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
