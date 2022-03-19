// This array contains the coordinates for popular New York City sight seeing bus stops.
const sightseeingbusStops = [
    //Times Square Lng,Lat
    [-73.985130, 40.758896],
    //Rockefeller Center Lng, Lat
    [-73.978798, 40.758678],
    // Empire State Building
    [-73.985428, 40.748817],
    //Chrysler Building
    [-73.975311, 40.751652],
    //Central Park
    [-73.968285, 40.785091],
    //Union Square
    [-73.990163, 40.735909],
    //Battery Park
    [-74.015788, 40.703031],
];

// TODO: add your own access token
mapboxgl.accessToken =
    'pk.eyJ1IjoiZnMtc3R1ZGVudCIsImEiOiJjbDB5MHZtbWwwNml5M2psbXUwZTZpNm5lIn0.iu-Z_E01wnv9hRohTPZ5Jw';

// TODO: create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.935242, 40.730610],
    zoom: 12,
});

// TODO: add a marker to the map starting at One World Trade Center
let marker = new mapboxgl.Marker().setLngLat([-74.013179, 40.713019]).addTo(map)

// counter here represents the index of the current bus stop
let counter = 0;

function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops

    setTimeout(() => {
        if (counter >= sightseeingbusStops.length) return;
        marker.setLngLat(sightseeingbusStops[counter]);
        counter++;
        move();
    }, 2000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, sightseeingbusStops };
}