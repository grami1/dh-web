import { Fragment } from "react";
import NavBar from "@/components/navbar/navbar";
import AreaList from "@/components/areas/area-list";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <AreaList />
    </Fragment>
  );
}
