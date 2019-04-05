var module$node_modules$leaflet$dist$leaflet_src = shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
var $jscompDefaultExport$$module$front_end$mymap = function() {
  function addMarker(e) {
    var newMarker = (new module$node_modules$leaflet$dist$leaflet_src.marker(e.latlng, {icon:customPin})).addTo(map);
    newMarker.bindPopup("\x3cb\x3eNew Room\x3c/b\x3e\x3cbr\x3eAdventures await");
    addedOne = true;
  }
  /** @const */ var map = module$node_modules$leaflet$dist$leaflet_src.map("image-map", {minZoom:1, maxZoom:4, center:[0, 0], zoom:1, crs:module$node_modules$leaflet$dist$leaflet_src.CRS.Simple, attributionControl:false});
  module$node_modules$leaflet$dist$leaflet_src.control.attribution({prefix:false}).addAttribution("UQ QAAFI").addTo(map);
  /** @const */ var w = 1280 * 2;
  /** @const */ var h = 806 * 2;
  /** @const */ var url = "/cad/0083-4.svg";
  /** @const */ var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
  /** @const */ var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
  /** @const */ var bounds = new module$node_modules$leaflet$dist$leaflet_src.LatLngBounds(southWest, northEast);
  module$node_modules$leaflet$dist$leaflet_src.imageOverlay(url, bounds).addTo(map);
  map.setMaxBounds(bounds);
  /** @const */ var m = {x:1250, y:850};
  map.on("click", addMarker);
  /** @const */ var customPin = module$node_modules$leaflet$dist$leaflet_src.divIcon({className:"location-pin", html:'\x3cimg src\x3d"https://static.robinpowered.com/roadshow/robin-avatar.png"\x3e\x3cdiv class\x3d"pin"\x3e\x3c/div\x3e\x3cdiv class\x3d"pulse"\x3e\x3c/div\x3e', iconSize:[30, 30], iconAnchor:[18, 30]});
  /** @const */ var marker = module$node_modules$leaflet$dist$leaflet_src.marker(map.unproject([m.x, m.y], map.getMaxZoom()), {icon:customPin}).addTo(map);
  marker.bindPopup("\x3cb\x3eBedroom\x3c/b\x3e\x3cbr\x3eFree all night");
};
/** @const */ var module$front_end$mymap = {};
/** @const */ module$front_end$mymap.default = $jscompDefaultExport$$module$front_end$mymap;

$CLJS.module$front_end$mymap=module$front_end$mymap;
//# sourceMappingURL=module$front_end$mymap.js.map
