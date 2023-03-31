import { FC, useState } from "react";
import { NavButton } from "./NavButton";
import { Row } from "../reusable-components/Row";
import { space } from "../metrics/metrics";

export const Navbar: FC = () => {
  const [selected, setSelected] = useState<null | NavigationOptions>(
    "overview"
  );
  return (
    <Row style={{ justifyContent: "center", padding: space(0.5) }}>
      <NavButton
        linkTo={"/"}
        label={"Overview"}
        selected={selected === "overview"}
        onClick={() => setSelected("overview")}
      />
      <NavButton
        linkTo={"/schedule"}
        label={"Schedule"}
        selected={selected === "schedule"}
        onClick={() => setSelected("schedule")}
      />
      <NavButton
        linkTo={"/standings"}
        label={"Standings"}
        selected={selected === "standings"}
        onClick={() => setSelected("standings")}
      />
    </Row>
  );
};

type NavigationOptions = "schedule" | "overview" | "standings";
