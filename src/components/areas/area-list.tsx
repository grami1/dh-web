import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AreaCard from "@/components/areas/area-card";

interface AreaListProps {
  areas: Area[];
}

import classes from "./area-list.module.css";
import { Area } from "@/utils/types";

export default function AreaList(props: AreaListProps) {
  const { areas } = props;

  return (
    <div className={classes.area}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {areas.map((area) => (
            <Grid item xs={6} key={area.areaId}>
              <AreaCard areaName={area.areaName} areaId={area.areaId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
