// Initialize Leaflet map
var map = L.map('map').setView([38.246639, 21.734573], 16);

// Add base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

var marker = L.marker([38.2463673403233, 21.735140649945635]).addTo(map);
marker.bindPopup("St. George Square").openPopup();

map.on('click', function(e) {
  var coords = e.latlng;
  var latt = coords.lat.toFixed(6);
  var lngg = coords.lng.toFixed(6);
  document.getElementById('latitude').value = latt;
  document.getElementById('longitude').value = lngg;
});

document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');

  toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open-sidebar');
  });
  
  document.getElementById('requests-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('popup-form').style.display = 'block'; // Display the popup form
  });

  document.getElementById('logout-form').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '../includes/logout.php', true);
    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
            // Assuming a successful logout, redirect the user to the login page or home page
            window.location.href = 'login.php'; // Change this to your login or home page
        }
    };
    xhr1.send('logout=true');
});
});
