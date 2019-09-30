const mapboxgl = require("mapbox-gl");
module.exports = function (markerType, coordinates) {
 const el = document.createElement("div");

 el.style.width = "32px";
 el.style.height = "39px";
 if (markerType === 'activity') {
   el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
 } else if (markerType === 'hotel') {
   el.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
 } else if (markerType === 'restaurant') {
   el.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
 } else {
   el.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
 }

 return new mapboxgl.Marker(el).setLngLat(coordinates);
}
