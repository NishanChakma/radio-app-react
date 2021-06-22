import {
  getStationsActionCreator,
  currentActionCreator,
} from "../Types/ActionCreatorTypes";

export const getStations: getStationsActionCreator = () => {
  return {
    type: "GET_STATIONS",
  };
};

export const currentStation: currentActionCreator = (name) => {
  return {
    type: "CURRENT_STATION",
    name,
  };
};
