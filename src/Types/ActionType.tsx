import { station } from "./StoreType";

// For Action Creator
export interface getStations {
  type: "GET_STATIONS";
}

// For Reducers
export interface gotStations {
  type: "GOT_STATIONS";
  stations: station[];
}

export const actionIds = {
  GET_STATIONS: "GET_STATIONS",
};
