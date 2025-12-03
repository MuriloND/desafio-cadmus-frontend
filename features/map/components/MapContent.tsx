"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSales } from "../hooks/useSales";
import { Skeleton } from "@/components/ui/Skeleton";
import { MapMarker } from "./MapMarker";

const createClusterCustomIcon = function (cluster: any) {
  const count = cluster.getChildCount();
  let colorClass = "bg-blue-500 border-blue-300";
  let size = "w-10 h-10";

  if (count >= 10 && count < 100) {
    colorClass = "bg-yellow-500 border-yellow-300";
    size = "w-12 h-12";
  } else if (count >= 100) {
    colorClass = "bg-red-500 border-red-300";
    size = "w-14 h-14";
  }

  return L.divIcon({
    html: `<div class="${colorClass} ${size} rounded-full flex items-center justify-center text-white font-bold border-4 shadow-lg transform hover:scale-110 transition-transform duration-200"><span class="text-sm">${count}</span></div>`,
    className: "custom-marker-cluster",
    iconSize: L.point(40, 40, true),
  });
};

export default function MapContent() {
  const { data, isLoading, isError } = useSales();
  const CENTER_SP: [number, number] = [-23.5505, -46.6333];

  if (isLoading) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-xl relative overflow-hidden">
        <Skeleton className="w-full h-full" />
        <span className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium z-10">
          Carregando mapa...
        </span>
      </div>
    );
  }

  if (isError) return <div className="p-10 text-center text-red-500">Erro ao carregar o mapa.</div>;

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 z-0 relative">
      <MapContainer
        center={CENTER_SP}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
          spiderfyOnMaxZoom={true}
        >
          {data?.data.map((sale) => (
            <MapMarker key={sale.id} sale={sale} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}