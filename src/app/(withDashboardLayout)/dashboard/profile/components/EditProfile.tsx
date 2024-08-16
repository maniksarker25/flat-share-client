import FSForm from "@/components/Forms/FSForm";
import FSInput from "@/components/Forms/FSInput";
import { useUpdateProfileMutation } from "@/redux/api/userApi";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const EditProfile = ({ userProfileInfo }: any) => {
  const [updateProfile] = useUpdateProfileMutation();
  const handleUpdateProfile = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values).unwrap();
      if (res?.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const defaultValues = {
    address: userProfileInfo?.address,
    bio: userProfileInfo?.bio,
    education: userProfileInfo?.education,
    email: userProfileInfo?.email,
    phone: userProfileInfo?.phone,
    profession: userProfileInfo?.profession,
  };

  return (
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
      {userProfileInfo ? (
        <FSForm defaultValues={defaultValues} onSubmit={handleUpdateProfile}>
          <FSInput name="bio" label="Enter your bio" fullWidth />
          <Stack direction={{ lg: "row" }} gap={1} mt={3}>
            <FSInput name="profession" label="Enter you profession" fullWidth />
            <FSInput name="address" label="Enter your address" fullWidth />
          </Stack>
          <Stack direction={{ lg: "row" }} gap={1} mt={3}>
            <FSInput name="education" label="Enter you education" fullWidth />
            <FSInput name="phone" label="Enter your phone" fullWidth />
          </Stack>
          <Box sx={{ mt: 3 }}>
            <FSInput name="email" label="Enter your email" fullWidth />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", mt: "15px" }}>
            <Button type="submit">Submit</Button>
          </Box>
        </FSForm>
      ) : (
        "Loading"
      )}
    </Box>
  );
};

export default EditProfile;
