"use client";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useApiIsLoaded,
} from "@vis.gl/react-google-maps";
import places, { Place } from "./data";
import styles from "./page.module.css";
//import { useSearchParams } from "next/navigation";

/*
const findPlaceById = (id: number): Place | undefined => {
  return places.find((place) => place.id === id);
};
*/

type Coords = {
  lat: number;
  lng: number;
} | null;

function markerLabel(text: string) {
  const labelIncludeStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
    text: text,
  };
  return labelIncludeStyle;
}

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [userLocation, setUserLocation] = useState<Coords>(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [currentZoom, setCurrentZoom] = useState(17);
  const isApiLoaded = useApiIsLoaded();
  /*
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  */
  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
  };
  const handleMapClick = (e: any) => {
    // マーカクリック(e.detail.placeIdがある)ではなく、地図自体のクリックであれば閉じる
    // MapClickEventはe.detail.latLngを持つが、e.detail.placeIdを持たないことが多い
    if (!e.detail.placeId) {
      setSelectedPlace(null);
    }
  };
  const handleZoomChange = (e: any) => {
    setCurrentZoom(e.detail.zoom);
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
  const [showAbout, setShowAbout] = useState(false);

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
            style={{ width: "100vw", height: "calc(100svh - 75px)" }}
            defaultCenter={{ lat: 35.4875, lng: 133.068315 }}
            defaultZoom={17}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            onClick={handleMapClick}
            onZoomChanged={handleZoomChange}
          >
            {places.map((place) => (
              <Marker
                key={place.id}
                position={place.position}
                onClick={() => handleMarkerClick(place)}
                label={currentZoom > 20 ? markerLabel(place.title) : undefined}
              />
            ))}
            {userLocation && isApiLoaded && (
              <Marker
                position={userLocation}
                icon={{
                  url: "data:image/svg+xml;utf-8,<svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='10' fill='%231a73e8' stroke='%23ffffff' stroke-width='2'/></svg>",
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
              />
            )}
          </Map>
          {selectedPlace && (
            <div className="table-container">
              <h2>{selectedPlace.title}</h2>
              <div className="description-scroll">
                {selectedPlace.description}
              </div>
            </div>
          )}
        </APIProvider>
      </main>
      <footer>
        <small>
          <button
            className="about-link"
            onClick={() => setShowAbout(true)}
          >
            About
          </button>
          &copy; minerva_juppiter All Right Reserved
        </small>
      </footer>
      {showAbout && (
        <div className="floating-modal">
          <div className="about">このサイトについて・免責事項</div>
          <div>
            <p>1. 当サイトは非公式のマップであり，公式サイト，実行委員会，その他一切の関係団体とは関係ございません。</p>
            <p>2. 当サイトに掲載する情報の正確性，完全性，最新性について，いかなる保証も行うものではありません。</p>
            <p>3. 当サイトの利用により生じた損害または不利益について，当サイト運営者は一切の責任を負わないものとします。</p>
            <p>4. 不具合・情報の誤り等がありましたら <a href="https://github.com/minerva-jupiter/shimane-u-fest-map" target="_blank" rel="noopener noreferrer">開発リポジトリ</a> でissueを作成していただけますと幸いです。</p>
          </div>
          <button
            className="floating-modal-close"
            onClick={() => setShowAbout(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
