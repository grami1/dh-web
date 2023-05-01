import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface AreaCardProps {
  areaName: string;
  areaId: string;
}

export default function AreaCard(props: AreaCardProps) {
  const { areaName, areaId } = props;

  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {areaName}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/areas/${areaId}`}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
