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
  const [copied, setCopied] = useState(false);

  // MapコンポーネントのonClickイベントハンドラ
  const handleMapClick = (e: any) => {
    // イベントオブジェクトから緯度経度情報が取得できることを確認
    console.log(e.type);
    if (e.type == "click") {
      const coords: any = e.detail.latLng;
      setCurrentPosition(coords);
      setCopied(false); // 新しい座標が選ばれたらコピー状態をリセット
      console.log(
        `新しい座標: Lat ${coords.lat.toFixed(6)}, Lng ${coords.lng.toFixed(6)}`,
      );
    } else {
      setCurrentPosition(null);
      setCopied(false);
    }
  };
  const handleCopy = async () => {
    if (!currentPosition) return;

    const lat = currentPosition.lat.toFixed(6);
    const lng = currentPosition.lng.toFixed(6);
    const textToCopy = `lat: ${lat}, lng: ${lng}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後にメッセージを非表示
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // エラー処理（例：alert('コピーに失敗しました')）
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
              style={{ width: "100%", height: "85vh" }}
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
            <div>
              <p>
                **タップした座標:** <br />
                lat: {currentPosition.lat.toFixed(6)}, lng:{" "}
                {currentPosition.lng.toFixed(6)}
              </p>
              <button
                onClick={handleCopy}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: copied ? "#4CAF50" : "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {copied ? "コピーしました！" : "座標をコピー"}
              </button>
            </div>
          ) : (
            <p>地図上の任意の場所をタップしてください。</p>
          )}
        </div>
      </footer>
    </div>
  );
}
