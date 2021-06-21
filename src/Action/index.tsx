import { getStationsActionCreator } from "../Types/ActionCreatorTypes";

export const getStations: getStationsActionCreator = () => {
  return {
    type: "GET_STATIONS",
  };
};
