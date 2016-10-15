(function() {
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    attribution: 'MapBox &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  

  http://api.ajapaik.ee/api-v1.php?action=photo&latitude=59.438217&longitude=24.790332

  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
})();
