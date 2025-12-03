import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { SaleRecord } from "../types";

const iconDefault = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapMarkerProps {
  sale: SaleRecord;
}

export const MapMarker = ({ sale }: MapMarkerProps) => {
  const getDotColor = (color: string) => {
    switch (color) {
      case 'Vermelho': return '#ef4444';
      case 'Amarelo': return '#eab308';
      case 'Verde': return '#22c55e';
      default: return '#3b82f6';
    }
  };

  return (
    <Marker position={[sale.lat, sale.lng]} icon={iconDefault}>
      <Popup className="custom-popup">
        <div className="p-1 min-w-[150px]">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
            <span
              className="w-3 h-3 rounded-full shadow-sm"
              style={{ backgroundColor: getDotColor(sale.color) }}
            />
            <h3 className="font-bold text-gray-800 text-base m-0">
              {sale.fruitName}
            </h3>
          </div>

          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Qtd:</span>
              <span className="font-medium text-gray-900">{sale.quantity} kg</span>
            </div>
            <div className="mt-3 pt-2 bg-green-50 rounded px-2 py-1 flex justify-between items-center text-primary font-bold">
              <span>Total:</span>
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(sale.total)}
              </span>
            </div>
          </div>
          
          <div className="text-[10px] text-gray-400 text-right mt-2">
            {new Date(sale.soldAt).toLocaleDateString()}
          </div>
        </div>
      </Popup>
    </Marker>
  );
};