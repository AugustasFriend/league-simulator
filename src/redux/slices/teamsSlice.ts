import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { StoreState } from "../StoreState";

export interface Team {
  name: string;
  nameAbb: string;
  players: Player[];
  skill: number;
  score: number;
}

type Position = "forward" | "defense" | "midfielder";

export interface Player {
  name: string;
  nameAbb: string;
  offense: number;
  defense: number;
  control: number;
  position: Position;
}

export const teamsSlice = createSlice({
  name: "teams",
  initialState: initialState,
  reducers: {
    setTeamWin: (state, action: PayloadAction<Team>) => {
      const team = state.teams.find(
        (team) => team.name === action.payload.name
      );
      if (team) {
        team.score += 3;
      }
    },
  },
});

export const { reducer: teamsReducer, actions: teamsActions } = teamsSlice;

export const getTeams = (state: StoreState) => state.teams.teams;
