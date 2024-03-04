// Initialize Leaflet map
var map = L.map('map').setView([37.9838, 23.7275], 13);

// Add base map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);




function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();
    L.circle(e.latlng, radius).addTo(map);
  }
  

function onLocationError(err){
    if (err.code === 1){
        alert("Please allow geolocation access");
    }
    else {
        alert("Cannot get current location");
    }
}

function updateUserLocation(position) {
    var latlng = L.latLng(position.coords.latitude, position.coords.longitude);
    L.marker(latlng).addTo(map).bindPopup("Your current location");
    map.setView(latlng, 16);
  }

  var watchId = navigator.geolocation.watchPosition(updateUserLocation, onLocationError, {
    enableHighAccuracy: true,
    maximumAge: 10000 // 10 seconds
  });

  setTimeout(function() {
    navigator.geolocation.clearWatch(watchId);
  }, 60000); // 1 minute

  document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open-sidebar');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Select the logout 
  var logout = document.querySelector(".sidebar ul li a[href='#logout']");

  // Add click event listener
  logout.addEventListener("click", function(event) {
      // Prevent the default behavior of the link (e.g., navigating to '#')
      event.preventDefault();

      // Redirect the user to the login page
      window.location.href = "users/login.html";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("requests-link").addEventListener("click", function(event) {
    event.preventDefault();
    // Create popup window
    var popupWindow = window.open("", "Create Request", "width=400,height=300");
    // Set the content of the popup window with inline styles
    popupWindow.document.write(`
      <html>
        <head>
          <title>Create Request</title>
          <style>
            /* Inline CSS for styling */
            body {
              font-family: 'Lato', sans-serif;
              padding: 20px;
              background-color: #f9f9f9;
            }
            h3 {
              margin-top: 0;
            }
            label {
              display: block;
              margin-bottom: 5px;
            }
            input[type="text"] {
              width: calc(100% - 10px);
              padding: 8px;
              margin-bottom: 10px;
              border: 1px solid #ccc;
              border-radius: 3px;
            }
            input[type="submit"] {
              width: 100%;
              padding: 10px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 3px;
              cursor: pointer;
            }
            input[type="submit"]:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <h3>Create Request</h3>
          <form>
            <label for="item">Item:</label><br>
            <input type="text" id="item" name="item"><br>
            <label for="people">People:</label><br>
            <input type="text" id="people" name="people"><br>
            <label for="location">Location:</label><br>
            <input type="text" id="location" name="location"><br><br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `);
  });
});
