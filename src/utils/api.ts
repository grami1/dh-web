import axios, { AxiosResponse } from "axios";
import { Weather } from "@/utils/types";

export async function getWeather(
  city: string,
  token: string
): Promise<AxiosResponse<Weather>> {
  const url = `http://localhost:8080/api/v1/weather?city=${city}`;
  return axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
