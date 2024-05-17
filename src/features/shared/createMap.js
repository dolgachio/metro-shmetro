import L from "leaflet";
import { createMainTileLayer } from "./tileLayers";

export function createMap(latLongExpression, parentElementId, zoom = 13) {
  let map = L.map(parentElementId).setView(latLongExpression, zoom);

  let mainTileLayer = createMainTileLayer();
  
  // Map basis
  mainTileLayer.addTo(map);

  return map;
}
