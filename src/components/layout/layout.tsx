import { Fragment } from "react";
import NavBar from "@/components/navbar/navbar";

export default function Layout(props) {
  const { items } = props;
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
}
