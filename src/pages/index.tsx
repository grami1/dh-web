import { Fragment } from "react";
import NavBar from "@/components/navbar/navbar";
import WeatherCard from "@/components/weather/weather-card";
import { getWeather } from "@/utils/api";
import { AxiosResponse } from "axios";
import { Weather } from "@/utils/types";

const token = "";

export default function Home(props) {
  return (
    <Fragment>
      <NavBar />
      <WeatherCard weather={props.weather} />
      {/*  <AreaList />*/}
    </Fragment>
  );
}

export async function getStaticProps() {
  const weatherResponse: AxiosResponse<Weather> = await getWeather(
    "Stockholm",
    token
  );
  const weather: Weather = weatherResponse.data;

  return {
    props: {
      weather: weather,
    },
    revalidate: 300,
  };
}
