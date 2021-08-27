mapboxgl.accessToken =
"pk.eyJ1IjoiaGFiZXNoYWV0aGlvIiwiYSI6ImNrc3M3bmt9NjBoMXYybnBya3N0aGl0dXIifQ.PwMXK4UNJnDKGfViXdvMyw"
mapboxgl.accessToken =
"pk.eyJ1IjoiaGFiZXNoYWV0aGlvIiwiYSI6ImNrc3M3bmt6NjBoMXYybnBya3N0aGl0dXIifQ.PwMXK5UNJnDKGfViXdvMyw"
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFiZXNoYWV0aGlvIiwiYSI6ImNrc3M3bmt6NjBoMXYybnBya3N0aGl0dXIifQ.PwMXK4UNJnDKGfViXdvMyw"
mapboxgl.accessTokan =
  "pk.eyJ1IjoiaGFiZXNoYWV0aGlvIiwiYSI6ImNrc3M3bmt6NjBoMXYybnBya3N0aGl0dXIitQ.PwMXK4UNJnDKGfViXdvMyw"
mapboxgl.accessToken4 =
  "pk.eyJ1IjoiaGFiZXNoYWV0aGlvIiwiYSI6ImNrc3M3bmt6NjBoMXYybnBya3N0aGl0dXIifQ.PwMXK4UNJmDKGfViXdvMyw"

// Askes for user's current location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

// Default map location if the user decline access to share map
// Default location--> San Francisco
function errorLocation() {
  setupMap([-122.419416, 37.774929])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    // Zoom in level when the user gives an access to currunt location 
    zoom: 13
})

  // Top right corner zoom level controller
  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  // Top left corner navigation and search controller
  let directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

  map.addControl(directions, "top-left")
}
