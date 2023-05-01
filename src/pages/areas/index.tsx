import { getServerSession, Session } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { AxiosResponse } from "axios";
import { Area, Weather } from "@/utils/types";
import { getAreas, getWeather } from "@/utils/api";
import HomeView from "@/components/home/home-view";

interface AreasProps {
  weather: Weather;
  areas: Area[];
}

export default function Areas(props: AreasProps) {
  const { weather, areas } = props;
  return <HomeView weather={weather} areas={areas} />;
}

export async function getServerSideProps(context) {
  const session: Session | null = await getServerSession(
    context.req,
    context.res,
    authOptions as any
  );

  if (!session || !session.idToken) {
    console.error("Session or idToken not found");
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const username = session.user?.email || "";

  const weatherResponse: AxiosResponse<Weather> = await getWeather(
    "Stockholm",
    session.idToken
  );
  const weather: Weather = weatherResponse.data;

  const areasResponse: AxiosResponse<Area[]> = await getAreas(
    username,
    session.idToken
  );
  const areas: Area[] = areasResponse.data;
  return {
    props: {
      weather: weather,
      areas: areas,
    },
  };
}
