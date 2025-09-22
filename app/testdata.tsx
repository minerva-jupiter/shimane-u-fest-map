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
    { time: "10:00", event: "オープニングセレモニー" },
    { time: "11:30", event: "地元グルメフェスティバル" },
    { time: "14:00", event: "和太鼓パフォーマンス" },
    { time: "16:00", event: "スペシャルゲストライブ" },
    { time: "18:00", event: "花火大会" },
  ];

  const places: Place[] = Array.from({ length: count }).map((_, index) => {
    const position = generateRandomPosition(baseLat, baseLng, radius);
    const title = titles[index % titles.length];

    const description = (
      <div style={{ maxWidth: "400px" }}>
        <h3>イベントタイムテーブル</h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  padding: "8px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                時間
              </th>
              <th
                style={{
                  padding: "8px",
                  border: "1px solid #ddd",
                  textAlign: "left",
                }}
              >
                内容
              </th>
            </tr>
          </thead>
          <tbody>
            {timetables.map((item, i) => (
              <tr
                key={i}
                style={{ backgroundColor: i % 2 === 0 ? "#fafafa" : "#fff" }}
              >
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  {item.time}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  {item.event}
                </td>
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
