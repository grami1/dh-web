import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import WeatherItem, { ICON_TYPES } from "@/components/weather/weather-item";

import classes from "./weather-card.module.css";

export default function WeatherCard() {
  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Stockholm
          </Typography>
          <div className={classes.condition}>
            <WeatherItem iconType={ICON_TYPES.CONDITION} />
          </div>
          <Divider />
          <div className={classes.items}>
            <WeatherItem iconType={ICON_TYPES.TEMPERATURE} value="+15" />
            <WeatherItem iconType={ICON_TYPES.WIND} value={35} />
            <WeatherItem iconType={ICON_TYPES.HUMIDITY} value={65} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
