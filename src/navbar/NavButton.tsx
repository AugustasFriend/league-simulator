import { FC } from "react";
import { Link } from "react-router-dom";
import { routesStrings } from "../routes/AppRoutes";
import { Button } from "@material-ui/core";
import { colors } from "../colors/colors";

interface NavButtonProps {
  linkTo: routesStrings;
  label: string;
}

export const NavButton: FC<NavButtonProps> = ({ linkTo, label }) => {
  return (
    <Link to={linkTo} style={{ textDecorationLine: "none" }}>
      <Button
        style={{
          color: colors.white,
          backgroundColor: colors.palette.prussianBlue,
        }}
        variant={"outlined"}
      >
        {label}
      </Button>
    </Link>
  );
};
