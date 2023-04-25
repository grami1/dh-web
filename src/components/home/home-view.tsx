import AreaList from "@/components/areas/area-list";
import WeatherCard from "@/components/weather/weather-card";

import classes from "./home-view.module.css";

export default function HomeView(props) {
  return (
    <div className={classes.view}>
      <div className={classes.area}>
        <AreaList />
      </div>
      <div className={classes.weather}>
        <WeatherCard weather={props.weather} />
      </div>
    </div>
  );
}
