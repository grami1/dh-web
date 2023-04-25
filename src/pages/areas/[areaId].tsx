import { Fragment } from "react";
import { getArea } from "@/utils/api";
import { Area } from "@/utils/types";
import { AxiosResponse } from "axios";
import SensorData from "@/components/sensor/sensor-data";

const token = "";

export default function AreaDetail(props) {
  const { area, sensorData } = props;

  return (
    <Fragment>
      <SensorData areaName={area.areaName} data={sensorData} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const areaId = context.params.areaId;
  const areaResponse: AxiosResponse<Area> = await getArea(areaId, token);
  const area: Area = areaResponse.data;

  // TODO retrieve from sensor
  const sensorData = {
    temperature: 23,
    humidity: 65,
  };

  return {
    props: {
      area: area,
      sensorData: sensorData,
    },
    revalidate: 3000,
  };
}

export async function getStaticPaths() {
  const userId = 1; // TODO get userId

  // TODO fix areas IDs retrieval
  // const areasResponse: AxiosResponse<Area[]> = await getAreas(userId, token);
  // const areas1: Area[] = areasResponse.data;

  const areas: Area[] = [
    {
      areaId: "1",
      areaName: "myArea",
    },
  ];

  const paths = areas.map((area) => ({
    params: {
      areaId: area.areaId,
    },
  }));

  return {
    paths: paths,
    fallback: false, // specified as false since all possible dynamic paths were defined
  };
}
