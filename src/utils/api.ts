import axios, { AxiosResponse } from "axios";
import { Area, Weather } from "@/utils/types";

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

export async function getAreas(
  userId: number,
  token: string
): Promise<AxiosResponse<Area[]>> {
  const url = `http://localhost:8080/api/v1/areas?userId=${userId}`;
  return axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getArea(
  areaId: string,
  token: string
): Promise<AxiosResponse<Area>> {
  const url = `http://localhost:8080/api/v1/areas/${areaId}`;
  return axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
