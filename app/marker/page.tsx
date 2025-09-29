"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  MapEvent, // MapEvent型をインポートに追加 (もしあれば)
} from "@vis.gl/react-google-maps";
import styles from "./page.module.css";

// 座標の型を定義
type Coords = {
  lat: number;
  lng: number;
} | null;

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState<Coords>(null);

  // MapコンポーネントのonClickイベントハンドラ
  const handleMapClick = (e: any) => {
    // イベントオブジェクトから緯度経度情報が取得できることを確認
    console.log(e.type);
    if (e.type == "click") {
      const coords: any = e.detail.latLng;
      setCurrentPosition(coords);
      console.log(
        `新しい座標: Lat ${coords.lat.toFixed(6)}, Lng ${coords.lng.toFixed(6)}`,
      );
    } else {
      setCurrentPosition(null);
    }
  };

  const defaultCenter = { lat: 35.486404, lng: 133.06863 };

  return (
    <div>
      <main>
        <div className={styles.mapContainer}>
          <APIProvider
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          >
            <Map
              style={{ width: "100%", height: "95vh" }}
              defaultCenter={defaultCenter}
              defaultZoom={17}
              gestureHandling={"greedy"}
              disableDefaultUI={false}
              mapId={process.env.NEXT_PUBLIC_MAP_ID || ""}
              // useMapEventsの代わりにMapコンポーネントに直接onClickを渡す
              onClick={handleMapClick}
            >
              {/* マーカーを直接描画する */}
              {currentPosition && <Marker position={currentPosition} />}
            </Map>
          </APIProvider>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.coordinateDisplay}>
          {currentPosition ? (
            <p>
              **タップした座標:** <br />
			  lat: {currentPosition.lat.toFixed(6)}, lng: {currentPosition.lng.toFixed(6)}
            </p>
          ) : (
            <p>地図上の任意の場所をタップしてください。</p>
          )}
        </div>
      </footer>
    </div>
  );
}
