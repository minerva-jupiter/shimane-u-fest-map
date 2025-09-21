import places from "./testdata";

export type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  description: string;
};

export default places;
