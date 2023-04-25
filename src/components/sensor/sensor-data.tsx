import Paper from "@mui/material/Paper";

import classes from "./sensor-data.module.css";
import Typography from "@mui/material/Typography";

export default function SensorData(props) {
  const { areaName, data } = props;

  const parameters = Object.keys(data).map((name) => (
    <Typography key={name} variant="h6" gutterBottom sx={{ "margin-left": 20 }}>
      {name}: {data[name]}
    </Typography>
  ));

  return (
    <div className={classes.data}>
      <Paper elevation={1} sx={{ height: 200, width: 800 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          {areaName}
        </Typography>
        {parameters}
      </Paper>
    </div>
  );
}
