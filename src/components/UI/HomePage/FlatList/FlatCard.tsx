import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TFlat } from "@/types/flat";
import Image from "next/image";
import Link from "next/link";

export default function FlatCard({ flat }: { flat: TFlat }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image src={flat?.photos[0]} alt="photo" width={500} height={100} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Price : {flat?.rentAmount}
        </Typography>
        <Typography variant="body1" component={"p"}>
          Number of bedrooms: {flat?.totalBedrooms}
        </Typography>
        <Typography variant="body1" component={"p"}>
          Number of rooms: {flat?.totalRooms}
        </Typography>
        <Typography variant="body1" component={"p"}>
          Location: {flat?.location}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={"10px"}>
          <span> Description</span>: {flat?.detailedDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          component={Link}
          href={`/all-flats/${flat?.id}`}
          size="small"
          variant="outlined"
        >
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}
