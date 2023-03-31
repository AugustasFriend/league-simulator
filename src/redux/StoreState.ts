import { TeamsReducerState } from "./slices/initialState";

export interface StoreState {
  readonly teams: TeamsReducerState;
}
