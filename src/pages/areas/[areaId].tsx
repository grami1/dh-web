import { Fragment } from "react";
import { getArea } from "@/utils/api";
import { Area } from "@/utils/types";
import { AxiosResponse } from "axios";
import SensorData from "@/components/sensor/sensor-data";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function AreaDetail(props) {
  const { area, sensorData } = props;

  return (
    <Fragment>
      <SensorData areaName={area.areaName} data={sensorData} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const areaId = context.params.areaId;
  const session: Session | null = await getServerSession(
    context.req,
    context.res,
    authOptions as any
  );

  if (!session || !session.idToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const areaResponse: AxiosResponse<Area> = await getArea(
    areaId,
    session.idToken
  );
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
  };
}
