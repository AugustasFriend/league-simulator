import { FC } from "react";
import { Column } from "../../reusable-components/Column";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, teamsActions } from "../../redux/slices/teamsSlice";

export const HomeScreen: FC = () => {
  const teams = useSelector(getTeams);
  const dispatch = useDispatch();
  console.log(teams);
  return (
    <Column style={{ width: 200 }}>
      {teams.map((team) => (
        <text>{team.score}</text>
      ))}
      <Button
        onClick={() => dispatch(teamsActions.setTeamWin(teams[0]))}
        variant={"outlined"}
      >
        Click me
      </Button>
    </Column>
  );
};

export default HomeScreen;
