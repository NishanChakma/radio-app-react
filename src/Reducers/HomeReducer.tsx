import { Reducer } from "redux";
import { station } from "../Types/StoreType";
import {
  getStations,
  gotStations,
  getCurrentStation,
  gotCurrentStation,
} from "../Types/ActionType";

type actions =
  | getStations
  | gotStations
  | gotCurrentStation
  | getCurrentStation;

const initialState: station[] = [];

const HomeReducer: Reducer<station[], actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "GET_STATIONS":
      return {
        ...state,
        loading: true,
      };
    case "CURRENT_STATION":
      return {
        ...state,
        name: action.name,
      };
    case "GOT_STATIONS":
      return {
        ...state,
        stations: action.stations,
        loading: false,
      };
    case "GOT_STATION_NAME":
      return {
        ...state,
        name: action.name,
      };
    default:
      return [...state];
  }
};

export default HomeReducer;
