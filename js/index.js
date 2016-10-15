function getAzimuthBetweenTwoPoints (object, picture) {

  var x = object.latlng.lat - picture.latlng.lat;
  var y = object.latlng.lng - picture.latlng.lng;
  var photoToObjectAzimuth =  (Math.PI / 180)*(Math.atan2(y, x));

  console.log("x: "+x+"\n y: "+y);
  console.log("photo: "+photoToObjectAzimuth);

  if(photoToObjectAzimuth < ((picture.azimuth + 25) && photoToObjectAzimuth > (picture.azimuth - 25))) {
    return true;
  }
  return false;
}

(function() {
  var selected = null;
  var markers = {};

  var map = L.map('map').setView([59.438392, 24.751690], 18);
  L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    attribution: 'MapBox &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  $.getJSON( "http://api.ajapaik.ee/api-v1.php", {
    action: "photo",
    latitude: 59.438392,
    longitude: 24.751690
  })
  .done(function(data) {
    $.each(data.result, function(index, photo) {
      if(photo.azimuth == null) {
        photo.azimuth = 0;
      }
      L.marker([photo.lat, photo.lon], {
        icon: L.divIcon({
          className: 'fa-icon',
          html: '<i class="fa fa-location-arrow fa-2x"></i>',
          iconSize: [25, 25]
        }),
        title: photo.id,
        rotationAngle: (photo.azimuth-45)
      }).addTo(map);
      markers[photo.id] = {latlng: L.latLng(photo.lat, photo.lon), azimuth: photo.azimuth};
    });

    map.on('click', function(e){
      if(selected == null) {
        selected = L.marker([e.latlng.lat, e.latlng.lng], {
          icon: L.divIcon({
            className: 'fa-icon',
            html: '<i class="fa fa-circle-o fa-2x"></i>',
            iconSize: [25, 25]
          })
        }).addTo(map);
      } else {
        selected.setLatLng(e.latlng);
      }

      $.each($("div.leaflet-marker-icon[title]"), function(index, marker) {
        if (getAzimuthBetweenTwoPoints(e, markers[marker.title])) {
          console.log("true");
          $(marker).css("color", "green");
        } else {
          console.log("false");
          $(marker).css("color", "red");
        }
      });
    });
  })
  .fail(function() {
    console.log( "error" );
  })
})()
