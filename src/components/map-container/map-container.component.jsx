import React from "react";
import { Map, Marker, Popup, GeoJSON, TileLayer } from "react-leaflet";

import bundesländerData from "../../variablen-styles/test";

import "./map-container.styles.scss";

const highlightFeature = e => {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7
  });
};

const resetHighlight = e => {
  console.log(e.target.setStyle({}));
  // Just to show the ref is there during the event, i'm not sure how to specifically use it with your library
  // component.refs.geojson.leafletElement.resetStyle(e.target);
  // geojsonresetStyle(e.target);
  // how to encapsulate GeoJson component/object?
};

const zoomToFeature = e => {
  Map.fitBounds(e.target.getBounds());
};

const onEachFeature = (feature, layer) => {
  console.log(layer);
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map center={{ lat: 51.5167, lng: 9.9167 }} zoom={6} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          data={bundesländerData}
          ref="geojson"
          onEachFeature={(feature, layer) => onEachFeature(feature, layer)}
        />
      </Map>
    );
  }
}

export default MapContainer;
