"use client";
import { useState } from "react";
import styles from "./page.module.css";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import places, { Place } from "./data";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleCloseClick = () => {
    setSelectedPlace(null);
  };
  return (
    <div>
      <main>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <Map
            style={{ width: "100vw", height: "95vh" }}
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
            {selectedPlace && (
              <InfoWindow
                position={selectedPlace.position}
                onCloseClick={handleCloseClick}
              >
                <h3>{selectedPlace.title}</h3>
                <p>{selectedPlace.description}</p>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </main>
      <footer>
        <p>@all right reserved by minerva_juppiter</p>
        <style jsx>{`
        p {
          text-align: center;
          color: white;
        }
      `}</style>
      </footer>
    </div>
  );
}
