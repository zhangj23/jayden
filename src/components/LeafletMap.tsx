"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

interface RealEstatePin {
  id: string;
  location: string;
  coords: [number, number];
  hypothesis: string;
}

interface LeafletMapProps {
  pins: RealEstatePin[];
  selectedPin: RealEstatePin | null;
  onSelectPin: (pin: RealEstatePin) => void;
}

// Fix default marker icon issue
const fixIcon = () => {
  delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
};

// Custom marker icon
const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        width: 32px;
        height: 32px;
        background: ${isSelected ? "#00d4aa" : "#1a1d26"};
        border: 2px solid ${isSelected ? "#00d4aa" : "#2a2d38"};
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background: ${isSelected ? "#0a0b0d" : "#00d4aa"};
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

// Map controller component for flying to selected pin
function MapController({ selectedPin }: { selectedPin: RealEstatePin | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedPin) {
      map.flyTo(selectedPin.coords, 14, {
        duration: 1,
      });
    }
  }, [selectedPin, map]);

  return null;
}

export default function LeafletMap({ pins, selectedPin, onSelectPin }: LeafletMapProps) {
  useEffect(() => {
    fixIcon();
  }, []);

  // UB North Campus center
  const center: [number, number] = [43.0022, -78.7875];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController selectedPin={selectedPin} />
      {pins.map((pin) => (
        <Marker
          key={pin.id}
          position={pin.coords}
          icon={createCustomIcon(selectedPin?.id === pin.id)}
          eventHandlers={{
            click: () => onSelectPin(pin),
          }}
        >
          <Popup>
            <div className="p-2">
              <h4 className="font-semibold text-sm mb-1" style={{ color: '#1a1d26' }}>{pin.location}</h4>
              <p className="text-xs" style={{ color: '#666' }}>{pin.hypothesis}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

