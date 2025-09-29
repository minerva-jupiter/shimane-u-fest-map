"use client";
import { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import places, { Place } from "./data";
import styles from "./page.module.css";
//import { useSearchParams } from "next/navigation";

/*
const findPlaceById = (id: number): Place | undefined => {
  return places.find((place) => place.id === id);
};
*/

type Coords = {
	lat :number;
	lng :number;
} | null;

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  // ユーザーの現在地を保持する状態
  const [userLocation, setUserLocation] = useState<Coords>(null);
  // 緯度経度取得中の状態
  const [locationLoading, setLocationLoading] = useState(true);
  /*
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  */
  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
  };
  /*
  useEffect(() => {
    if (search !== null) {
      const searchNum = Number(search);
      if (!isNaN(searchNum)) {
        const foundPlace = findPlaceById(searchNum);
        if (foundPlace) {
          setSelectedPlace(foundPlace);
        }
      }
    }
  }, [search]);
	*/
  // console.log(places);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationLoading(false);
        },
        (error) => {
          console.error("Geolocation Error:", error);
          setLocationLoading(false);
          // エラー時もデフォルト位置に地図を表示するため、userLocationはnullのまま
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      );
    } else {
      setLocationLoading(false);
    }
  }, []);
  return (
    <div>
      <main>
        <header>
          <p>島根大学祭マップ</p>
        </header>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <Map
            style={{ width: "100vw", height: "calc(100svh - 80px)" }}
            defaultCenter={{ lat: 35.486404, lng: 133.06863 }}
            defaultZoom={17}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                position={place.position}
                onClick={() => handleMarkerClick(place)}
              />
            ))}
            {userLocation && (
              <Marker
                position={userLocation}
                // 現在地であることを示すためにカスタムアイコンを使用することを推奨
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // 青いドットアイコン
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            )}
          </Map>
          {selectedPlace && (
            <div className="table-container">
              <h2>{selectedPlace.title}</h2>
              {selectedPlace.description}
            </div>
          )}
        </APIProvider>
      </main>
      <footer>
        <small>&copy; 2025 minerva_juppiter All Right Reserved</small>
      </footer>
    </div>
  );
}
