import { getWeather } from "@/utils/api";
import { AxiosResponse } from "axios";
import { Weather } from "@/utils/types";
import HomeView from "@/components/home/home-view";

const token = "";

export default function Home(props) {
  return <HomeView weather={props.weather} />;
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
