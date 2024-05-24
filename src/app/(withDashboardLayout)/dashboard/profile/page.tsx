"use client";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data } = useGetMyProfileQuery({});
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          minWidth: "500px",
          border: "1px solid gray",
        }}
      >
        <Box sx={{}}>
          {/* <Box
          sx={{
            width: "150px",
            height: "150px",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0px auto",
          }}
        >
          <Image
            src={data?.profilePhoto}
            width={150}
            height={150}
            alt="profilePhoto"
          />
        </Box>
        <Box
          sx={{
            marginLeft: "200px",
            marginTop: "-50px",
          }}
        >
          {updating ? (
            <CircularProgress
              size={24}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                padding: "5px",
              }}
            />
          ) : (
            <AutoFileUploader
              name="file"
              label=""
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "none",
                ":hover": { border: "none", backgroundColor: "#fff" },
              }}
              icon={<CameraAltIcon />}
              onFileUpload={handleProfilePhotoChange}
            />
          )}
        </Box> */}
          <Box
            sx={{
              textAlign: "center",
              mt: "35px",
            }}
          >
            <Typography fontSize={"20px"} fontWeight={600}>
              Username: {data?.username}
            </Typography>
            <Typography>Email: {data?.email}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid gray",
              paddingBottom: "5px",
              mb: "10px",
            }}
          >
            <Typography fontWeight={600}>Status:</Typography>
            <Typography>{data?.status}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid gray",
              paddingBottom: "5px",
              mb: "10px",
            }}
          >
            <Typography fontWeight={600}>Role:</Typography>
            <Typography>{data?.role}</Typography>
          </Box>

          <Box
            sx={{
              textAlign: "center",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
