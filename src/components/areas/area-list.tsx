import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AreaCard from "@/components/areas/area-card";

import classes from "./area-list.module.css";

export default function AreaList() {
  return (
    <div className={classes.area}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AreaCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
