//import * as L from "leaflet";
// import * as L from "leaflet";
import * as L from "leaflet"
// export default ()=>{
//     const myMap = L.map('mymap').setView([51.505, -0.09], 13)
//     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//         maxZoom: 18,
//         id: 'mapbox.streets',
//         accessToken: 'pk.eyJ1IjoibGVzbGllYmluYmluIiwiYSI6ImNqdHpoNGhqYTM0ZjM0M280OGlldWh0bm4ifQ.eXTBy2GzzUhNk6c_Kpk00w'
//     }).addTo(myMap);
// }
export default markerPopup => {
    // Using leaflet.js to pan and zoom a big image.
    // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
    // Marker Pin: https://codepen.io/zachdunn/pen/wapEam
    // create the slippy map
    const map = L.map("image-map", {
        minZoom: 1,
        maxZoom: 4,
        center: [0, 0],
        zoom: 1,
        crs: L.CRS.Simple,
        attributionControl: false
    });
    L.control
        .attribution({
            prefix: false
        })
        .addAttribution("UQ QAAFI")
        .addTo(map);
    // House: https://i.imgur.com/cenqiCf.jpg
    // Palace SVG (1280 x 806): https://dl.dropbox.com/s/yhrpnftsuis15z6/Topkapi_Palace_plan.svg
    // dimensions of the image
    const w = 1280 * 2;
    const h = 806 * 2;
    const url = "/cad/0083-4.svg";
    // calculate the edges of the image, in coordinate space
    const southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    const northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    const bounds = new L.LatLngBounds(southWest, northEast);
    // add the image overlay,
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);
    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
    // pixel coords
    const m = {
        x: 1250,
        y: 850
    };
    //Add marker
    // let newMarkerGroup = new L.LayerGroup()
    map.on("click", addMarker);
    const customPin = L.divIcon({
        className: "location-pin",
        html:
            '<img src="https://static.robinpowered.com/roadshow/robin-avatar.png"><div class="pin"></div><div class="pulse"></div>',
        iconSize: [30, 30],
        iconAnchor: [18, 30]
    });

    function addMarker(e) {
        // Add marker to map at click location; add popup window
        // if (addedOne) {
        //     return;
        // }
        let newMarker = new L.marker(e.latlng, {
            icon: customPin
        }).addTo(map);
        // newMarker.bindPopup("<b>New Room</b><br>Adventures await");
        newMarker.bindPopup(markerPopup);
    }

    // Lookup neighbors https://github.com/mapbox/leaflet-knn
    const marker = L.marker(map.unproject([m.x, m.y], map.getMaxZoom()), {
        icon: customPin
    }).addTo(map);
    // Add pop up for click
    marker.bindPopup("<b>Bedroom</b><br>Free all night");
};
