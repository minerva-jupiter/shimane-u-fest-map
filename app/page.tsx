"use client";
import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import places, { Place } from "./data";
import styles from "./page.module.css";
//import { useSearchParams } from "next/navigation";
import { connection } from "next/server";

/*
const findPlaceById = (id: number): Place | undefined => {
  return places.find((place) => place.id === id);
};
*/

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
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
          </Map>
          {selectedPlace && (
            <div className="table-container">{selectedPlace.description}</div>
          )}
        </APIProvider>
      </main>
      <footer>
        <small>&copy; 2025 minerva_juppiter All Right Reserved</small>
      </footer>
    </div>
  );
}
