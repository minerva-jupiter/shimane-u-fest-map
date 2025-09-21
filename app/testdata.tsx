import crypto from "crypto";
import Place from "./data";

const generateRandomPosition = (
  centerLat: number,
  centerLng: number,
  radiusMeters: number,
): { lat: number; lng: number } => {
  const EARTH_RADIUS_METERS = 6378137;
  const latRadian = (centerLat * Math.PI) / 180;
  const lngRadian = (centerLng * Math.PI) / 180;

  const y = (radiusMeters / EARTH_RADIUS_METERS) * Math.sin(latRadian);
  const x =
    (radiusMeters / EARTH_RADIUS_METERS) *
    Math.cos(latRadian) *
    Math.cos(lngRadian);
  const z =
    (radiusMeters / EARTH_RADIUS_METERS) *
    Math.cos(latRadian) *
    Math.sin(lngRadian);

  const u = Math.random();
  const v = Math.random();

  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);

  const dx = Math.sin(phi) * Math.cos(theta);
  const dy = Math.sin(phi) * Math.sin(theta);
  const dz = Math.cos(phi);

  const newX = x + dx;
  const newY = y + dy;
  const newZ = z + dz;

  const newLng = (Math.atan2(newZ, newX) * 180) / Math.PI;
  const newLat =
    (Math.asin(newY / Math.sqrt(newX * newX + newY * newY + newZ * newZ)) *
      180) /
    Math.PI;

  return { lat: newLat, lng: newLng };
};

const generateRandomPlaces = (count: number): Place[] => {
  const baseLat = 35.486404;
  const baseLng = 133.06863;
  const radius = 100;
  const titles = ["地点A", "地点B", "地点C", "地点D", "地点E"];
  const descriptions = [
    "詳細情報1",
    "詳細情報2",
    "詳細情報3",
    "詳細情報4",
    "詳細情報5",
  ];

  const places: Place[] = Array.from({ length: count }).map((_, index) => {
    const position = generateRandomPosition(baseLat, baseLng, radius);
    const title = titles[index % titles.length];
    const description = descriptions[index % descriptions.length];

    return {
      id: index + 1,
      position,
      title,
      description,
    };
  });

  return places;
};

export default generateRandomPlaces(5);
