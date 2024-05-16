import L from "leaflet";
import { mainTileLayers } from "./tileLayers";

export function createMap(latLongExpression, parentElementId, zoom = 13) {
  let map = L.map(parentElementId).setView(latLongExpression, zoom);

  // Map basis
  mainTileLayers.addTo(map);

  return map;
}
