import crypto from "crypto";

type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  description: string;
};

const generateRandomPosition = (
  centerLat: number,
  centerLng: number,
  radiusMeters: number
): { lat: number; lng: number } => {
  const ONE_LAT_DEGREE_IN_METERS = 111132.954;
  const ONE_LNG_DEGREE_IN_METERS =
    40075016.686 * Math.cos((centerLat * Math.PI) / 180) / 360;

  const randomRadius = Math.random() * radiusMeters;
  const randomAngle = Math.random() * 2 * Math.PI;

  const dx = randomRadius * Math.cos(randomAngle);
  const dy = randomRadius * Math.sin(randomAngle);

  const newLat = centerLat + dy / ONE_LAT_DEGREE_IN_METERS;
  const newLng = centerLng + dx / ONE_LNG_DEGREE_IN_METERS;

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

export default  generateRandomPlaces(5);
