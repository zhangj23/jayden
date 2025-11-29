"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  TrendingUp,
  MapPin,
  ExternalLink,
  Target,
  BarChart3,
  Percent,
  Users,
  Activity,
} from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const RealEstateMap = dynamic(() => import("./RealEstateMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] sm:h-[350px] lg:h-[400px] bg-surface-elevated rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-text-muted text-sm">Loading map...</span>
    </div>
  ),
});

type TabType = "real-estate" | "equity";

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

interface EquityPosition {
  id: string;
  ticker: string;
  name: string;
  hypothesis: string;
  analysis: string;
  sentiment: "bullish" | "bearish" | "neutral";
  metrics: {
    label: string;
    value: string;
    icon: React.ElementType;
  }[];
}

const realEstatePins: RealEstatePin[] = [
  {
    id: "sweet-home",
    location: "Sweet Home Road Corridor",
    coords: [43.0089, -78.7867],
    hypothesis: "Bullish on Off-Campus Student Housing",
    analysis:
      "Analyzed the Sweet Home corridor, projecting a supply crunch due to a 21% YoY increase in UB freshman enrollment and <5% vacancy rates. Forecasted rent growth outperforming the national student housing average of 2.5% based on localized supply constraints.",
    metrics: [
      { label: "Freshman Growth", value: "+21% YoY", icon: Users },
      { label: "Target Asset", value: "Class B MF", icon: Building2 },
      { label: "Vacancy Rate", value: "<5%", icon: Percent },
    ],
  },
];

const equityPositions: EquityPosition[] = [
  {
    id: "iwm",
    ticker: "IWM",
    name: "iShares Russell 2000 ETF - Small Caps",
    hypothesis: "Sector Rotation Play: Long Small Caps on Rate Cut Expectations",
    analysis:
      "Constructed a 'Long IWM' thesis based on Q4 2025 Federal Reserve interest rate probabilities and technical signals (Golden Cross). Identified optimal entry points with a 1:3 risk/reward ratio using support/resistance levels.",
    sentiment: "bullish",
    metrics: [
      { label: "Technical Setup", value: "Golden Cross", icon: Activity },
      { label: "Macro Driver", value: "Fed Rate Q4", icon: TrendingUp },
      { label: "Risk/Reward", value: "1:3", icon: Target },
    ],
  },
];

export default function AlphaDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>("real-estate");
  const [selectedPin, setSelectedPin] = useState<RealEstatePin | null>(
    realEstatePins[0]
  );
  const [selectedEquity, setSelectedEquity] = useState<EquityPosition | null>(
    equityPositions[0]
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard" className="py-24 md:py-32 gradient-bg">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Alpha Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Market Intelligence
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted">
            Interactive analysis demonstrating market research methodology.
            Real-time observations on real estate trends and equity positioning.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-2xl border border-border overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-elevated">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-1 text-sm text-text-muted">
              <span className="w-2 h-2 rounded-full bg-accent pulse-live" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("real-estate")}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "real-estate"
                  ? "text-accent border-b-2 border-accent bg-accent/5"
                  : "text-text-muted hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              <Building2 size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Real Estate</span>
              <span className="hidden sm:inline px-2 py-0.5 rounded bg-surface-elevated text-xs">
                The Market Map
              </span>
            </button>
            <button
              onClick={() => setActiveTab("equity")}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-all ${
                activeTab === "equity"
                  ? "text-accent border-b-2 border-accent bg-accent/5"
                  : "text-text-muted hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Equity</span>
              <span className="hidden sm:inline px-2 py-0.5 rounded bg-surface-elevated text-xs">
                The Watchlist
              </span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-3 sm:p-6">
            {activeTab === "real-estate" ? (
              <RealEstateTab
                pins={realEstatePins}
                selectedPin={selectedPin}
                onSelectPin={setSelectedPin}
              />
            ) : (
              <EquityTab
                positions={equityPositions}
                selectedEquity={selectedEquity}
                onSelectEquity={setSelectedEquity}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RealEstateTab({
  pins,
  selectedPin,
  onSelectPin,
}: {
  pins: RealEstatePin[];
  selectedPin: RealEstatePin | null;
  onSelectPin: (pin: RealEstatePin) => void;
}) {
  return (
    <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
      {/* Map */}
      <div className="lg:col-span-3">
        <RealEstateMap
          pins={pins}
          selectedPin={selectedPin}
          onSelectPin={onSelectPin}
        />
      </div>

      {/* Analysis Panel */}
      <div className="lg:col-span-2 space-y-3 sm:space-y-4">
        {selectedPin ? (
          <>
            {/* Location Header */}
            <div className="bg-surface-elevated rounded-xl p-3 sm:p-4 border border-border">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{selectedPin.location}</h4>
                  <p className="text-xs sm:text-sm text-text-muted">Amherst, NY</p>
                </div>
              </div>
            </div>

            {/* Hypothesis */}
            <div className="bg-surface-elevated rounded-xl p-3 sm:p-4 border border-border">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-accent">
                  The Alpha (Hypothesis)
                </span>
              </div>
              <p className="font-semibold text-sm sm:text-base">{selectedPin.hypothesis}</p>
            </div>

            {/* Analysis */}
            <div className="bg-surface-elevated rounded-xl p-3 sm:p-4 border border-border">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-accent">
                  The Analysis
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {selectedPin.analysis}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {selectedPin.metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-surface-elevated rounded-xl p-2 sm:p-4 border border-border text-center"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1 sm:mb-2" />
                    <p className="text-sm sm:text-lg font-bold text-accent">{metric.value}</p>
                    <p className="text-[10px] sm:text-xs text-text-muted leading-tight">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-64 text-text-muted">
            <p>Select a pin on the map to view analysis</p>
          </div>
        )}
      </div>
    </div>
  );
}

function EquityTab({
  positions,
  selectedEquity,
  onSelectEquity,
}: {
  positions: EquityPosition[];
  selectedEquity: EquityPosition | null;
  onSelectEquity: (position: EquityPosition) => void;
}) {
  return (
    <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
      {/* Watchlist */}
      <div className="space-y-3">
        <h4 className="text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider mb-3 sm:mb-4">
          Watchlist
        </h4>
        <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0">
          {positions.map((position) => (
            <button
              key={position.id}
              onClick={() => onSelectEquity(position)}
              className={`flex-shrink-0 w-[140px] sm:w-full text-left p-3 sm:p-4 rounded-xl border transition-all ${
                selectedEquity?.id === position.id
                  ? "border-accent bg-accent/5"
                  : "border-border bg-surface-elevated hover:border-accent/50"
              }`}
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="font-mono font-bold text-base sm:text-lg">{position.ticker}</span>
                <span
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium ${
                    position.sentiment === "bullish"
                      ? "bg-green-500/10 text-green-400"
                      : position.sentiment === "bearish"
                      ? "bg-red-500/10 text-red-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}
                >
                  {position.sentiment.toUpperCase()}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted truncate">{position.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Panel */}
      <div className="lg:col-span-2 space-y-3 sm:space-y-4">
        {selectedEquity ? (
          <>
            {/* Header */}
            <div className="bg-surface-elevated rounded-xl p-4 sm:p-6 border border-border">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="font-mono text-xl sm:text-2xl font-bold">
                      {selectedEquity.ticker}
                    </span>
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                        selectedEquity.sentiment === "bullish"
                          ? "bg-green-500/10 text-green-400"
                          : selectedEquity.sentiment === "bearish"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {selectedEquity.sentiment === "bullish" ? "↑" : "↓"}{" "}
                      <span className="hidden sm:inline">{selectedEquity.sentiment.toUpperCase()}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-base text-text-muted">{selectedEquity.name}</p>
                </div>
                <a
                  href={`https://finance.yahoo.com/quote/${selectedEquity.ticker}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-surface transition-colors text-text-muted hover:text-accent"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Hypothesis */}
              <div className="p-3 sm:p-4 rounded-lg bg-surface border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-xs sm:text-sm font-medium text-accent">
                    The Alpha (Hypothesis)
                  </span>
                </div>
                <p className="font-semibold text-sm sm:text-base">{selectedEquity.hypothesis}</p>
              </div>
            </div>

            {/* Analysis */}
            <div className="bg-surface-elevated rounded-xl p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-accent">The Analysis</span>
              </div>
              <p className="text-xs sm:text-base text-text-muted leading-relaxed">
                {selectedEquity.analysis}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {selectedEquity.metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="bg-surface-elevated rounded-xl p-2 sm:p-4 border border-border"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mb-2 sm:mb-3" />
                    <p className="text-sm sm:text-lg font-bold">{metric.value}</p>
                    <p className="text-[10px] sm:text-xs text-text-muted leading-tight">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-64 text-text-muted">
            <p>Select a position from the watchlist</p>
          </div>
        )}
      </div>
    </div>
  );
}

