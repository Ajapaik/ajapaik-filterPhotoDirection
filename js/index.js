// Should be replaced when API supports JSONP
var json = {"monuments":[{"country":"ee","lang":"et","project":"wikipedia","id":"8129","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"Klubihoone (peahoone ja tiibhoone) Aia tn 12, 1870. a. -d","address":"[[Aia t\u00e4nav]] 12","municipality":"Tallinn","lat":59.4389215618,"lon":24.7518843793,"image":"Tallinn, klubihoone (peahoone ja tiibhoone) Aia tn 12, 1870.jpg","commonscat":"","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=8129","changed":"2016-10-15 10:59:22","dist":59.956035534942},{"country":"ee","lang":"et","project":"wikipedia","id":"1109","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"[[Tallinna adventkirik|Tallinna Seitsmenda p\u00e4eva adventistide palvela]]","address":"Kesklinna linnaosa, [[Mere puiestee]] 3","municipality":"Tallinn","lat":59.4379529456,"lon":24.7529247194,"image":"Tallinna Seitsmenda p\u00e4eva adventistide palvela (2).jpg","commonscat":"Tallinn Advent Church","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"Tallinna_adventkirik","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=1109","changed":"2016-10-15 10:59:23","dist":85.27900946121},{"country":"ee","lang":"et","project":"wikipedia","id":"3089","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"Elamu Uus tn10 fassaad, 1791.a.","address":"Kesklinna linnaosa, Uus tn 10","municipality":"Tallinn","lat":59.4384084422,"lon":24.7501697251,"image":"Tallinn, elamu Uus 10 fassaad, 1791.jpg","commonscat":"","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=3089","changed":"2016-10-15 10:59:22","dist":85.841478865452},{"country":"ee","lang":"et","project":"wikipedia","id":"8171","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"[[Laevastiku Ohvitseride Maja]], 1954. a.","address":"Kesklinna linnaosa, Mere pst 5","municipality":"Tallinn","lat":59.4385122948,"lon":24.7533163168,"image":"Tallinn, laevastiku Ohvitseride Maja, 1954 (1).jpg","commonscat":"Russian Cultural Centre, Tallinn","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"Laevastiku_Ohvitseride_Maja","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=8171","changed":"2016-10-15 10:59:22","dist":93.053736584254},{"country":"ee","lang":"et","project":"wikipedia","id":"24240","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"Elamu apteegiga Vana-Viru 15 v\u00e4listrepi piirdega","address":"Mere pst 1 \/\/ [[Vana-Viru t\u00e4nav|Vana-Viru tn]] 15","municipality":"Tallinn","lat":59.4376558581,"lon":24.7526499405,"image":"Tallinn, elamu apteegiga Vana-Viru 15 v\u00e4listrepi piirdega (2).jpg","commonscat":"","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=24240","changed":"2016-10-15 10:59:22","dist":98.262302614641},{"country":"ee","lang":"et","project":"wikipedia","id":"3090","adm0":"ee","adm1":"ee-37","adm2":"Tallinn","adm3":null,"adm4":null,"name":"Elamu-haldushoone Uus tn15, 1751.a., 20.saj.","address":"Kesklinna linnaosa, Uus tn 15","municipality":"Tallinn","lat":59.4390645426,"lon":24.7497465191,"image":"Tallinn, elamu-haldushoone Uus 15, 1751.a., 20.saj (2).jpg","commonscat":"","source":"\/\/et.wikipedia.org\/w\/index.php?title=Vikipeedia%3AVikiprojekt_Kultuurip%C3%A4rand\/Tallinna_ajaloom%C3%A4lestised_ja_ehitism%C3%A4lestised&oldid=4440474","monument_article":"","wd_item":null,"registrant_url":"http:\/\/register.muinas.ee\/?menuID=monument&action=view&id=3090","changed":"2016-10-15 10:59:22","dist":132.82213907406}]};

function angletopositive(angle){
  if (angle < 0){
    return angle + 360;
  }
  return angle;
}

function cross(x,y,x2,y2){
  return (x*y2-x2*y);
}

function dot(x,y,x2,y2){
  return x*x2+y*y2;
}

function working(object, picture){
  var x = object.latlng.lat - picture.latlng.lat;
  var y = object.latlng.lng - picture.latlng.lng;

  var photoToObjectAzimuth = (180 / Math.PI)*(Math.atan2(y, x));
  var photoToObjectAzimuth2 = photoToObjectAzimuth;
  var pictureAzimuth = angletopositive(picture.azimuth);
  var photoToObjAzimuth = angletopositive(photoToObjectAzimuth);

  var diff = pictureAzimuth - photoToObjAzimuth;
  diff_max_angle = 30;

  if(diff > 330){
    diff = 360-diff;
  }
  if(diff < -330){
    diff = diff+360;
  }

  if((diff < diff_max_angle && diff > -diff_max_angle)) {
    return true;
  }
  return false;
}

(function() {
  var selected = null;
  var markers = {};
  var photos = [];

  var centerPosition = L.latLng(59.438392, 24.751690);

  var map = L.map('map', {zoomControl: false}).setView([centerPosition.lat, centerPosition.lng], 18);
  L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    attribution: 'MapBox &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  /*//jsonp not compatible
  $.ajax({ //get title of Wikipedia page from wikidata
      type: 'GET',
      url:  'https://tools.wmflabs.org/heritage/api/api.php',
      dataType: 'jsonp',
      data: {
        action: "search",
        bbox: map.getBounds().toBBoxString(), // 24.74944531917572,59.43756389356322,24.753929972648617,59.43921955672056
        format: 'json'
      }
    }).done(function(response){
      console.log(response);
    });*/

  // Cross-site error
  /*$.getJSON( "https://tools.wmflabs.org/heritage/api/api.php", {
    action: "search",
    bbox: map.getBounds().toBBoxString()
  }, function(data) {
    console.log(data);
  });*/

  $.each(json.monuments, function(_, monument) {
    L.marker([monument.lat, monument.lon], {
      icon: L.divIcon({
        className: 'fa-icon',
        html: '<i class="fa fa-university fa-2x"></i>',
        iconSize: [25, 25]
      })
    }).addTo(map);
  });

  L.control.zoom({
    position:'topright'
  }).addTo(map);

  $.getJSON( "http://api.ajapaik.ee/api-v1.php", {
    action: "photo",
    latitude: centerPosition.lat,
    longitude: centerPosition.lng
  })
  .done(function(data) {
    photos = data.result;
    $.each(photos, function(index, photo) {
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
      $("<img/>", {
        src: photo.image_thumb
      }).appendTo($("<li/>").appendTo($("#image-container")));
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
        selected.on('click', function(){
          map.removeLayer(selected);
          selected = null;
          $.each(markers, function(photoid, _) {
            $("div.leaflet-marker-icon[title="+photoid+"]").css("color", "");
            $("#image-container").empty();
            $.each(photos, function(_, photo) {
              $("<img/>", {
                src: photo.image_thumb
              }).appendTo($("<li/>").appendTo($("#image-container")));
            });
          });
        });
      } else {
        selected.setLatLng(e.latlng);
      }

      $("#image-container").empty();
      $.each(photos, function(index, photo) {
        var marker = $("div.leaflet-marker-icon[title="+photo.id+"]");
        if (working(e, markers[photo.id])) {
          $("<img/>", {
            src: photo.image_thumb
          }).appendTo($("<li/>").appendTo($("#image-container")));
          marker.css("color", "green");
        } else {
          marker.css("color", "red");
        }
      });
    });
  })
  .fail(function() {
    console.log( "error" );
  })
})()
