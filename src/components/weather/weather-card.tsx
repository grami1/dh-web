import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import WeatherItem, { ICON_TYPES } from "@/components/weather/weather-item";

import classes from "./weather-card.module.css";
import { Weather } from "@/utils/types";
import { useEffect, useState } from "react";

export default function WeatherCard(props) {
  const weather: Weather = props.weather;

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => {
      clearInterval(timer);
    };
  });

  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric",
  });

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTimeDate = `${formattedTime}, ${formattedDate}`;

  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {formattedTimeDate}
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            Stockholm
          </Typography>
          <div className={classes.condition}>
            <WeatherItem
              iconType={ICON_TYPES.CONDITION}
              value={weather.condition.text}
              iconUrl={weather.condition.icon}
            />
          </div>
          <Divider />
          <div className={classes.items}>
            <WeatherItem
              iconType={ICON_TYPES.TEMPERATURE}
              value={weather.temperature}
            />
            <WeatherItem iconType={ICON_TYPES.WIND} value={weather.wind} />
            <WeatherItem
              iconType={ICON_TYPES.HUMIDITY}
              value={weather.humidity}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
