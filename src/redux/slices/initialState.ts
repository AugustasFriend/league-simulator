import { Team } from "./teamsSlice";
import { createPlayerMock, createTeamMock } from "../utils/mocks";

export interface TeamsReducerState {
  teams: Team[];
}

export const initialState: TeamsReducerState = {
  teams: [
    createTeamMock({
      players: [
        createPlayerMock({
          defense: 5,
          offense: 5,
          control: 5,
          name: "name",
          nameAbb: "nameAbb",
          position: "midfielder",
        }),
      ],
      name: "teamName",
      nameAbb: "teamNameAbb",
      skill: 10,
      score: 0,
    }),
    createTeamMock({
      players: [
        createPlayerMock({
          defense: 4,
          offense: 5,
          control: 4,
          name: "name2",
          nameAbb: "nameAbb2",
          position: "midfielder",
        }),
      ],
      name: "teamName2",
      nameAbb: "teamNameAbb2",
      skill: 8,
      score: 0,
    }),
  ],
};
