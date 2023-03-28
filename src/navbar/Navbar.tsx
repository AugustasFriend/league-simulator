import { FC } from "react";
import { NavButton } from "./NavButton";
import { Row } from "../reusable-components/Row";

export const Navbar: FC = () => {
  return (
    <Row style={{ justifyContent: "center" }}>
      <NavButton linkTo={"/"} label={"Overview"} />
      <NavButton linkTo={"/schedule"} label={"Schedule"} />
      <NavButton linkTo={"/standings"} label={"Standings"} />
    </Row>
  );
};
