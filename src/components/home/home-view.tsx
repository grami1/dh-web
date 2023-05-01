import AreaList from "@/components/areas/area-list";
import WeatherCard from "@/components/weather/weather-card";

import classes from "./home-view.module.css";
import { Area, Weather } from "@/utils/types";

interface HomeViewProps {
  weather: Weather;
  areas: Area[];
}

export default function HomeView(props: HomeViewProps) {
  const { areas, weather } = props;

  return (
    <div className={classes.view}>
      <div className={classes.area}>
        <AreaList areas={areas} />
      </div>
      <div className={classes.weather}>
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}
