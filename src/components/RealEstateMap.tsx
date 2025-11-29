"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface RealEstatePin {
  id: string;
  location: string;
  coords: [number, number];
  hypothesis: string;
  analysis: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ElementType;
  }[];
}

interface RealEstateMapProps {
  pins: RealEstatePin[];
  selectedPin: RealEstatePin | null;
  onSelectPin: (pin: RealEstatePin) => void;
}

export default function RealEstateMap({
  pins,
  selectedPin,
  onSelectPin,
}: RealEstateMapProps) {
  const [MapComponent, setMapComponent] = useState<React.ComponentType<{
    pins: RealEstatePin[];
    selectedPin: RealEstatePin | null;
    onSelectPin: (pin: RealEstatePin) => void;
  }> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamically import Leaflet only on client side
    const loadMap = async () => {
      try {
        const L = await import("leaflet");
        await import("leaflet/dist/leaflet.css");
        const { MapContainer, TileLayer, Marker, Popup, useMap } = await import("react-leaflet");

        // Fix default marker icon
        delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });

        // Create custom icon function
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

        // Map controller component
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

        // Create the actual map component
        const LeafletMap = ({
          pins,
          selectedPin,
          onSelectPin,
        }: {
          pins: RealEstatePin[];
          selectedPin: RealEstatePin | null;
          onSelectPin: (pin: RealEstatePin) => void;
        }) => {
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
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
                      <h4 className="font-semibold text-sm mb-1">{pin.location}</h4>
                      <p className="text-xs text-gray-400">{pin.hypothesis}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          );
        };

        setMapComponent(() => LeafletMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load map:", error);
        setIsLoading(false);
      }
    };

    loadMap();
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden border border-border">
      {isLoading || !MapComponent ? (
        <div className="w-full h-full bg-surface-elevated flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-border flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-text-muted">Loading Market Map...</p>
            <p className="text-xs text-text-muted mt-1">Amherst, NY Region</p>
          </div>
        </div>
      ) : (
        <MapComponent pins={pins} selectedPin={selectedPin} onSelectPin={onSelectPin} />
      )}

      {/* Map overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface via-transparent to-transparent opacity-50" />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-surface-elevated/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border z-[1000]">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-text-muted">Analysis Zone</span>
        </div>
      </div>
    </div>
  );
}
