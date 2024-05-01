import L from "leaflet";

import {
  londonMapRootElementId,
  kyivMapRootElementId,
} from "./constants/mapRootElementId.const";

function createMap(latLongExpression, parentElementId) {1
  let map = L.map(parentElementId).setView(latLongExpression, 13);

  // Map basis
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  return map;
}

export function createLondonMap() {
  let map = createMap([51.506, -0.09], londonMapRootElementId);

  let marker = L.marker([51.5, -0.09]).addTo(map);

  let circle = L.circle([51.508, -0.11], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);

  let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
  ]).addTo(map);

  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  let popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

  function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
    console.log("Map Center: ", map.getCenter());
  }

  map.on("click", onMapClick);
}

export function createKyivMap() {
    let map = createMap([50.45004, 30.52513], kyivMapRootElementId);
}
