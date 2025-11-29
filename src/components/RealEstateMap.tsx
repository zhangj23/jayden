"use client";

import dynamic from "next/dynamic";
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

// Dynamically import LeafletMap with no SSR
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
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
  ),
});

export default function RealEstateMap({
  pins,
  selectedPin,
  onSelectPin,
}: RealEstateMapProps) {
  // Simplify pins for the LeafletMap component
  const simplePins = pins.map(pin => ({
    id: pin.id,
    location: pin.location,
    coords: pin.coords,
    hypothesis: pin.hypothesis,
  }));

  const simpleSelectedPin = selectedPin ? {
    id: selectedPin.id,
    location: selectedPin.location,
    coords: selectedPin.coords,
    hypothesis: selectedPin.hypothesis,
  } : null;

  const handleSelectPin = (simplePin: { id: string; location: string; coords: [number, number]; hypothesis: string }) => {
    const fullPin = pins.find(p => p.id === simplePin.id);
    if (fullPin) {
      onSelectPin(fullPin);
    }
  };

  return (
    <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden border border-border">
      <LeafletMap
        pins={simplePins}
        selectedPin={simpleSelectedPin}
        onSelectPin={handleSelectPin}
      />

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
