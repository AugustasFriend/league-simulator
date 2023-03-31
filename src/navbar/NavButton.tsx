import { FC } from "react";
import { Link } from "react-router-dom";
import { routesStrings } from "../routes/AppRoutes";
import styled from "@emotion/styled";
import { Column } from "../reusable-components/Column";

interface NavButtonProps {
  linkTo: routesStrings;
  label: string;
  onClick: () => void;
  selected: boolean;
}

export const NavButton: FC<NavButtonProps> = ({
  linkTo,
  label,
  onClick,
  selected,
}) => {
  return (
    <Link to={linkTo} style={{ textDecorationLine: "none" }}>
      <Column>
        <Button
          style={
            selected
              ? {
                  borderTop: "1px solid #646cff",
                  borderBottom: "1px solid #646cff",
                  transition: "border-width 0.5s ease",
                  transformOrigin: "center",
                }
              : undefined
          }
          onClick={onClick}
        >
          {label}
        </Button>
      </Column>
    </Link>
  );
};

const Button = styled.button`
  width: 12rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  color: white;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  &:hover {
    color: #646cff;
  }
`;
