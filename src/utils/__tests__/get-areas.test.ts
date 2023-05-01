import { describe, expect, it } from "@jest/globals";
import { getAreas } from "../api";
import axios, { AxiosResponse } from "axios";
import { Area } from "@/utils/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const TOKEN = "token";

describe("getAreas", () => {
  it("should fetch areas when successful response", async () => {
    const areas: Area[] = [
      {
        areaId: "1",
        areaName: "myArea",
      },
    ];
    const expectedUrl =
      "http://localhost:8080/api/v1/areas?username=john@doe.com";
    const expectedOptions = {
      headers: {
        Authorization: "Bearer token",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({ data: areas });

    const areasResponse: AxiosResponse<Area[]> = await getAreas(
      "john@doe.com",
      TOKEN
    );
    const actualAreas: Area[] = areasResponse.data;

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, expectedOptions);
    expect(actualAreas[0].areaName).toEqual("myArea");
    expect(actualAreas[0].areaId).toEqual("1");
  });
});
