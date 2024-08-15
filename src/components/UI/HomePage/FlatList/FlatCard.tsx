import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TFlat } from "@/types/flat";
import Link from "next/link";
import Image from "next/image";

export default function FlatCard({ flat }: { flat: TFlat }) {
  return (
    <Card
      sx={{
        height: 400,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)", // Adjust the shadow here
      }}
    >
      <CardMedia
        sx={{
          height: 250,
          cursor: "pointer",
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        image={flat?.photos[0]}
        title="Flat image"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          Rent : {flat?.rentAmount}
        </Typography>
        <Typography variant="body1" component="p">
          Number of bedrooms: {flat?.totalBedrooms}
        </Typography>
        <Typography variant="body1" component="p">
          Number of rooms: {flat?.totalRooms}
        </Typography>
        <Typography variant="body1" component="p">
          Location: {flat?.location}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary" mt="10px">
          <span>Description</span>: {flat?.detailedDescription.slice(0, 70)}...
        </Typography> */}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          component={Link}
          href={`/all-flats/${flat?.id}`}
          size="small"
          variant="outlined"
          sx={{ mb: "10px" }}
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}
