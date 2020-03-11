import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";

import "./popup-map.styles.scss";

const PopupMap = ({ pos }) => {
  return (
    <Map
      center={pos}
      zoom={15}
      zoomControl={false}
      boxZoom={false}
      keyboard={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      dragging={false}
      id="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={pos} />
    </Map>
  );
};

export default PopupMap;
