import { Fragment } from "react";
import NavBar from "@/components/navbar/navbar";
import AreaList from "@/components/areas/area-list";
import WeatherCard from "@/components/weather/weather-card";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <WeatherCard />
      {/*  <AreaList />*/}
    </Fragment>
  );
}
