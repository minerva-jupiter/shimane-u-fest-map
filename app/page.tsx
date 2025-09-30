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
        <small>minerva_juppiter All Right Reserved</small>
      </footer>
    </div>
  );
}
