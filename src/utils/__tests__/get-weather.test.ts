import { describe, expect, it } from "@jest/globals";
import { getWeather } from "../api";
import axios, { AxiosResponse } from "axios";
import { Weather } from "@/utils/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const TOKEN = "token";
const CITY = "Stockholm";

describe("getWeather", () => {
  it("should fetch weather when successful response", async () => {
    const weather: Weather = {
      condition: {
        text: "Cloudy",
        icon: "//weather-icon.com",
      },
      temperature: 10,
      wind: 6.3,
      humidity: 74,
    };
    const expectedUrl = "http://localhost:8080/api/v1/weather?city=Stockholm";
    const expectedOptions = {
      headers: {
        Authorization: "Bearer token",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({ data: weather });

    const weatherResponse: AxiosResponse<Weather> = await getWeather(
      CITY,
      TOKEN
    );
    const actualWeather: Weather = weatherResponse.data;

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, expectedOptions);
    expect(actualWeather.temperature).toEqual(10);
    expect(actualWeather.wind).toEqual(6.3);
    expect(actualWeather.humidity).toEqual(74);
    expect(actualWeather.condition.text).toEqual("Cloudy");
    expect(actualWeather.condition.icon).toEqual("//weather-icon.com");
  });
});
