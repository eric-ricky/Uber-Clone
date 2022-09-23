import React, { useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
import { useMapContext } from "../../lib/context/map-context";

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

const Map = () => {
  const mapCtx = useMapContext();
  const [lng, setLng] = useState(126.929962);
  const [lat, setLat] = useState(37.555813);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 13,
    });

    console.log(mapCtx.pickupCordinates);
    console.log(mapCtx.destinationCordinates);

    if (mapCtx.pickupCordinates?.length > 0)
      addMarker(map, mapCtx.pickupCordinates);

    if (mapCtx.destinationCordinates?.length > 0)
      addMarker(map, mapCtx.destinationCordinates);
  }, [mapCtx.pickupCordinates, mapCtx.destinationCordinates]);

  const addMarker = (map, coords) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map);
  };

  return <div id="map" className="w-full h-full"></div>;
};

export default Map;
