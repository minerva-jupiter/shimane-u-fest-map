"use client";
import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import places, { Place } from "./data";
import styles from "./page.module.css";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
  };

  console.log(places);
  return (
    <div>
      <main>
        <header>
          <p>SITE TITLE</p>
        </header>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <Map
            style={{ width: "100vw", height: "calc(100vh - 80px)" }}
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
          </Map>
          {selectedPlace && (
            <div className="table-container">
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
