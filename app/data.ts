import places from "./testdata.tsx";

export type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  descriction: string;
};

export default places;
