"use client";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/userApi";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PersonalInformation from "./components/PersonalInformation";
import EditProfile from "./components/EditProfile";
import UserMetaData from "./components/UserMetaData";
import AdminMetaData from "./components/AdminMetaData";
import { useGetMetaDataQuery } from "@/redux/api/metaApi";
import axios from "axios";
import { toast } from "sonner";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: metaData, refetch: metaDataRefetch } =
    useGetMetaDataQuery(undefined);
  const { data, refetch } = useGetMyProfileQuery(undefined);
  useEffect(() => {
    refetch();
    metaDataRefetch();
  });
  const profileInfo = data?.data;

  const [updateProfile] = useUpdateProfileMutation();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );

      if (response.data.success) {
        try {
          const res = await updateProfile({
            profileImage: response?.data?.data?.url,
          }).unwrap();
          if (res?.success) {
            toast.success("Profile updated successfully");
          } else {
            toast.error("Something went wrong");
          }
        } catch (error) {
          toast.error("Something went wrong");
        }
      } else {
        console.error("Upload failed: ", response.data);
        toast.error("Upload failed, please try again");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Something went wrong, please try again later");
    }
  };

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
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={3}
              sx={{ position: "relative" }}
            >
              <Image
                style={{
                  borderRadius: "100%",
                  width: "120px",
                  height: "120px",
                }}
                src={
                  profileInfo?.userProfile?.profileImage ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                width={200}
                height={200}
                alt="ProfileImage"
              />
              <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
                <svg
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "70px",
                    backgroundColor: "black",
                    padding: "5px",
                    borderRadius: "100%",
                    stroke: "white",
                    cursor: "pointer",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </label>
              <input
                type="file"
                id="profileImage"
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
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
