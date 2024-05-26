import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FSForm from "@/components/Forms/FSForm";
import { Grid } from "@mui/material";
import FSInput from "@/components/Forms/FSInput";
import { FieldValues } from "react-hook-form";
import { useUpdateProfileMutation } from "@/redux/api/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/services/actions/logoutUser";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profileData: any;
};

export default function EditProfileModal({
  open,
  setOpen,
  profileData,
}: TModalProps) {
  const handleClose = () => setOpen(false);
  const [error, setError] = React.useState("");
  const [updateProfile] = useUpdateProfileMutation();
  const router = useRouter();
  const defaultValues = {
    username: profileData?.username,
    email: profileData?.email,
  };
  const handleUpdateProfile = async (values: FieldValues) => {
    try {
      const res = await updateProfile(values);
      if (res?.data?.id) {
        toast.success("Profile updated successfully");
        logoutUser(router);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box textAlign={"center"}>
            {defaultValues && (
              <FSForm
                onSubmit={handleUpdateProfile}
                defaultValues={defaultValues}
              >
                <Grid container spacing={3} my={1}>
                  <Grid item xs={12}>
                    <FSInput
                      label="User Name"
                      type="text"
                      size="small"
                      fullWidth={true}
                      name="username"
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
                  Update
                </Button>
              </FSForm>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
