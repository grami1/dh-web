import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function AreaCard() {
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Room 1
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={"/areas"}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
