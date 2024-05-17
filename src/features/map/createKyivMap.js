import L from "leaflet";

import { kyivMapRootElementId } from "../constants/mapRootElementId.const";
import { createMap } from "../shared/createMap";
import { createKashtanMarker } from "./kyivMetro/createKashtanMarker";
import { kyivCenterCoordinates } from "./kyivMetro/kyivCenterCoordinates";

export function createKyivMap() {
  let map = createMap(kyivCenterCoordinates, kyivMapRootElementId);

  // Marker
  let kashtanMarker = createKashtanMarker();
  const kashtanPopup = kashtanMarker.bindPopup("Я Каштан, поїдемо туди палити");

  setTimeout(() => {
    kashtanPopup.openPopup();
  }, 2000);

  console.log(kashtanMarker.toGeoJSON());
  console.log(kashtanMarker.getLatLng());

  kashtanMarker.addTo(map);
}
