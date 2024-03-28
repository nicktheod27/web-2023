// Initialize Leaflet map
var map = L.map('map').setView([38.246639, 21.734573], 16);

// Add base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

var marker = L.marker([38.2463673403233, 21.735140649945635]).addTo(map);

marker.bindPopup("St. George Square").openPopup();

map.on('click', function(e){
  var coords = e.latlng;
  var latt= coords.lat.toFixed(6);
  var lngg = coords.lng.toFixed(6);
  // Update the input field with the formatted latitude
  document.getElementById('latitude').value = latt;
  // Update the input field with the formatted longitude
  document.getElementById('longitude').value = lngg;
});


  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open-sidebar');
    });
});


document.addEventListener("DOMContentLoaded", function() {
document.getElementById('requests-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  document.getElementById('popup-form').style.display = 'block'; // Display the popup form
  });
});

//====================================//
/*
fetch('includes/Items.json')
.then(response =>{
  if(!response.ok){
    throw new Error("Error fetching json Data");
  }
  return response.json();
})

.then(jsonData => {
  console.log(jsonData);
  const data = jsonData.map(item => item.name);
  console.log(data);
  
  const autocomplete_limit=5;
})

.catch(error=>{
  console.log("Error Fetching the JSON data", error_message);
})*/


document.getElementById('logout-form').addEventListener('click', function (event) {
  event.preventDefault();

  fetch('includes/logout.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error logging out.');
      }
      return response.json();
    })
    .then(response => {
      console.log(response);
      if (response.success) {
        // Redirect 
        window.location.href = response.redirect;
      }
    })
    .catch(error => {
      console.error('Error logging out:', error.message);
    });
});
