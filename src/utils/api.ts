import axios, { AxiosResponse } from "axios";
import { Area, Weather } from "@/utils/types";

export async function getWeather(
  city: string,
  token: string
): Promise<AxiosResponse<Weather>> {
  console.log("[Api] Getting weather from server for the city " + city);
  const url = `http://localhost:8080/api/v1/weather?city=${city}`;
  return axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getAreas(
  username: string,
  token: string
): Promise<AxiosResponse<Area[]>> {
  console.log("[Api] Getting areas from server for username " + username);
  const url = `http://localhost:8080/api/v1/areas?username=${username}`;
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
  console.log("[Api] Getting area from server by areaId " + areaId);
  const url = `http://localhost:8080/api/v1/areas/${areaId}`;
  return axios.get(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
