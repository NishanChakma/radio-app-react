import { station } from "../Types/StoreType";
import { getStationsActionCreator } from "../Types/ActionCreatorTypes";

interface AppPropType {
  station: station[];
  getStations: getStationsActionCreator;
  toggleType: boolean;
  stationKeyType: string;
}

export default AppPropType;
