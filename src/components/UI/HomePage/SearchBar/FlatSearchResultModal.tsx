import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { TFlat } from "@/types/flat";
import { Grid } from "@mui/material";
import FlatCard from "../FlatList/FlatCard";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  flats: TFlat[];
  isLoading: boolean;
};

export default function FlatSearchResultModal({
  open,
  setOpen,
  flats,
  isLoading,
}: TModalProps) {
  const handleClose = () => setOpen(false);
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Typography component={"h4"} variant="h4" sx={{ mt: 2 }}>
            Your search result
          </Typography>
          {flats?.length > 0 ? (
            <Grid container spacing={4} sx={{ mt: "20px" }}>
              {flats?.map((flat: TFlat, index: number) => (
                <Grid item md={4} key={index}>
                  <FlatCard key={index} flat={flat} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography
              textAlign={"center"}
              variant="h4"
              component={"h4"}
              mt={"30px"}
            >
              Do not found any flat
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
