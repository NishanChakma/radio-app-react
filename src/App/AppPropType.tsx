import { station } from "../Types/StoreType";
import {
  getStationsActionCreator,
  currentActionCreator,
} from "../Types/ActionCreatorTypes";

interface AppPropType {
  station: station[];
  getStations: getStationsActionCreator;
  currentStation: currentActionCreator;
}

export default AppPropType;
