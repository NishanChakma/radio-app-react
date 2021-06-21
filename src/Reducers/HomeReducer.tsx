import { Reducer } from "redux";
import { station } from "../Types/StoreType";
import { getStations, gotStations } from "../Types/ActionType";

type actions = getStations | gotStations;

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
    case "GOT_STATIONS":
      return {
        ...state,
        stations: action.stations,
        loading: false,
      };
    default:
      return [...state];
  }
};

export default HomeReducer;
