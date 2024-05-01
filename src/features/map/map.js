import L from "leaflet";

// Import required styles
import "leaflet/dist/leaflet.css";
import "./map.css";

import { createLondonMap, createKyivMap } from "./createMap";

createLondonMap();
createKyivMap();