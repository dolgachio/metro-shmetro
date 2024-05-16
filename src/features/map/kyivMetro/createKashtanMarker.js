export function createKashtanMarker() {
    // Icon Creation
  const icon = L.icon({
    iconUrl: "/apple.png",
    iconSize: [48, 48],
  });

  let kashtanMarkerCoordinates = [50.45114192981369, 30.512844377710735];

  // Marker
  let kashtanMarker = L.marker(kashtanMarkerCoordinates, {
    icon,
    draggable: true,
  });
  
  // Add Popup
  kashtanMarker.bindPopup("Я Каштан, поїдемо туди палити");

  return kashtanMarker;
}