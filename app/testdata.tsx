import React from "react";

type Place = {
  id: number;
  position: { lat: number; lng: number };
  title: string;
  description: React.ReactNode;
};

const generateRandomPosition = (
  centerLat: number,
  centerLng: number,
  radiusMeters: number,
): { lat: number; lng: number } => {
  const ONE_LAT_DEGREE_IN_METERS = 111132.954;
  const ONE_LNG_DEGREE_IN_METERS =
    (40075016.686 * Math.cos((centerLat * Math.PI) / 180)) / 360;

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

  const timetables = [
    { time: "10:00 - 14:00", event: "オープニングセレモニー" },
    { time: "11:30", event: "地元グルメフェスティバル" },
    { time: "14:00", event: "和太鼓パフォーマンス" },
    { time: "16:00", event: "スペシャルゲストライブ" },
    { time: "18:00", event: "花火大会" },
    { time: "19:30", event: "クロージングセレモニー" },
    { time: "10:00", event: "オープニングセレモニー" },
    { time: "11:30", event: "地元グルメフェスティバル" },
    { time: "14:00", event: "和太鼓パフォーマンス" },
    { time: "16:00", event: "スペシャルゲストライブ" },
    { time: "18:00", event: "花火大会" },
    { time: "19:30", event: "クロージングセレモニー" },
  ];

  const places: Place[] = Array.from({ length: count }).map((_, index) => {
    const position = generateRandomPosition(baseLat, baseLng, radius);
    const title = titles[index % titles.length];

    const description = (
      <div className="table-container">
        <h3>{title}</h3>
        <table>
          <thead>
            <tr>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {timetables.map((item, i) => (
              <tr key={i}>
                <td>{item.time}</td>
                <td>{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

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
