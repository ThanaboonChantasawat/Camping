"use client";

import dynamic from "next/dynamic";

const MapLandmark = dynamic(() => import("@/components/map/MapLandmark"), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});

export default MapLandmark;