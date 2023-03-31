import { Player, Team } from "../slices/teamsSlice";

export function createTeamMock({
  players,
  skill,
  score,
  nameAbb,
  name,
}: Team): Team {
  return { players, skill, score, nameAbb, name };
}

export function createPlayerMock({
  defense,
  control,
  offense,
  position,
  nameAbb,
  name,
}: Player): Player {
  return { defense, offense, control, position, nameAbb, name };
}
