import { station } from "./StoreType";

// For Action Creator
export interface getStations {
  type: "GET_STATIONS";
}

export interface getCurrentStation {
  type: "CURRENT_STATION";
  name: string;
}

// For Reducers
export interface gotStations {
  type: "GOT_STATIONS";
  stations: station[];
}

export interface gotCurrentStation {
  type: "GOT_STATION_NAME";
  name: string;
}

export const actionIds = {
  GET_STATIONS: "GET_STATIONS",
  CURRENT_STATION: "CURRENT_STATION",
};
