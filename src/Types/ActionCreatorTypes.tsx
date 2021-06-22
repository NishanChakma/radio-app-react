import { getStations, getCurrentStation } from "./ActionType";

export type getStationsActionCreator = () => getStations;
export type currentActionCreator = (name: string) => getCurrentStation;
