"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Home() {
  return (
    <div>
      <main>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <Map
            style={{ width: "100vw", height: "95vh" }}
            defaultCenter={{ lat: 35.486404, lng: 133.06863 }}
            defaultZoom={17}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
			mapId={process.env.NEXT_PUBLIC_MAP_ID || ''}
          />
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
