import L from "leaflet";

import { kyivMetroMapRootElementId } from "../../constants/mapRootElementId.const";
import { createMap } from "../../shared/createMap";
import { kyivMetroRedBranchStations } from "./redBranchCoordinates";
import { createKashtanMarker } from "./createKashtanMarker";
import { createAllTileLayers } from "../../shared/tileLayers";
import { kyivCenterCoordinates } from "./kyivCenterCoordinates";
import { routineCoordinates } from "./routineCoordinates";

function addRoutineCoordinates() {
  return L.geoJSON(routineCoordinates, {
    onEachFeature: ({ geometry }, layer) => {
      if (geometry?.type === "Polygon") {
        layer.bindPopup("Тут ми живемо")
      }

      if (geometry?.type === "LineString") {
        layer.bindPopup("Тут ми гуляємо з Кіпом")
      }
    },
    style: ({ properties }) => {
      console.log(properties);

      return {
        color: properties?.stroke,
        fillColor: properties?.fill,
        fillOpacity: properties["fill-opacity"]
      }
    },
  });
}

function createRedBranchLayerGroup() {
  let redBranchStationMarkers = kyivMetroRedBranchStations.map(
    ([stationName, coordinates]) => {
      let marker = L.marker(coordinates, { title: stationName });
      marker.bindPopup(stationName);

      return marker;
    }
  );

  return L.layerGroup(redBranchStationMarkers);
}

export function createKyivMetroMap() {
  let map = createMap(kyivCenterCoordinates, kyivMetroMapRootElementId, 11);

  let redBranchStationsLayerGroup = createRedBranchLayerGroup();
  let kashtanMarker = createKashtanMarker();

  let baseLayers = createAllTileLayers();
  let overlays = {
    "Кафе Каштан": kashtanMarker,
    "Червона гілка Метро": redBranchStationsLayerGroup,
  };

  kashtanMarker.addTo(map);
  redBranchStationsLayerGroup.addTo(map);

  // Add layers control
  L.control.layers(baseLayers, overlays).addTo(map);

  addRoutineCoordinates().addTo(map);
}
