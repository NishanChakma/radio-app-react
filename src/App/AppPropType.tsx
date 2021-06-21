import { station } from "../Types/StoreType";
import { getStationsActionCreator } from "../Types/ActionCreatorTypes";

interface AppPropType {
  station: station[];
  getStations: getStationsActionCreator;
}

export default AppPropType;
