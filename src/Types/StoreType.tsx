export type station = {
  name: string;
  bitrate: number;
  urlResolved: string;
  favicon: string;
};

interface StoreType {
  stations: station[];
}

export default StoreType;
