const buildMarker = require('./marker');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoia21jZGFuaWVsIiwiYSI6ImNrMTZsaHpzZTA2OXMzZGxqdWJhZTB1dmgifQ.21H7vNbAixHDq22W_f4MKA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
// const el = document.createElement("div");


// el.style.width = "32px";
// el.style.height = "39px";
// el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(el)
//   .setLngLat([-74.009151, 40.705086])
//   .addTo(map);


const el = buildMarker("activity", [-74.009151, 40.705086]);
el.addTo(map);

