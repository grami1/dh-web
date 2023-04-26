import { describe, expect, it } from "@jest/globals";
import { getArea } from "../api";
import axios, { AxiosResponse } from "axios";
import { Area } from "@/utils/types";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const TOKEN = "token";

describe("getArea", () => {
  it("should fetch area when successful response", async () => {
    const area: Area = {
      areaId: "1",
      areaName: "myArea",
    };
    const expectedUrl = "http://localhost:8080/api/v1/areas/1";
    const expectedOptions = {
      headers: {
        Authorization: "Bearer token",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({ data: area });

    const areaResponse: AxiosResponse<Area> = await getArea("1", TOKEN);
    const actualArea: Area = areaResponse.data;

    expect(mockedAxios.get).toHaveBeenCalledWith(expectedUrl, expectedOptions);
    expect(actualArea.areaName).toEqual("myArea");
    expect(actualArea.areaId).toEqual("1");
  });
});
