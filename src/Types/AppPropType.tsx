import { station } from "./StoreType";
import {
  getStationsActionCreator,
  currentActionCreator,
} from "./ActionCreatorTypes";

interface AppPropType {
  station: station[];
  getStations: getStationsActionCreator;
  currentStation: currentActionCreator;
}

export default AppPropType;
