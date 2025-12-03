"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSales } from "../hooks/useSales";
import { Skeleton } from "@/components/ui/Skeleton";

const iconDefault = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapContent() {
  const { data, isLoading, isError } = useSales();
  const CENTER_SP: [number, number] = [-23.5505, -46.6333];

  if (isLoading) {
    return (
      <div className="w-full h-[400px] rounded-xl overflow-hidden relative bg-gray-100">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Carregando mapa e coordenadas...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[400px] bg-red-50 rounded-xl flex items-center justify-center text-red-500 border border-red-200">
        Erro ao carregar dados do mapa.
      </div>
    );
  }

  const sales = data?.data || [];

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-sm border border-gray-200 z-0">
      <MapContainer
        center={CENTER_SP}
        zoom={10}
        scrollWheelZoom={true} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sales.map((sale) => (
          <Marker
            key={sale.id}
            position={[sale.lat, sale.lng]} 
            icon={iconDefault}
          >
            <Popup>
              <div className="text-sm">
                <strong className="text-primary block mb-1">{sale.fruitName}</strong>
                <p>Quantidade: {sale.quantity}kg</p>
                <p>Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sale.total)}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {new Date(sale.soldAt).toLocaleDateString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}