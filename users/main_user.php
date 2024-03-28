<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leaflet Map with Popups</title>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
  <link rel="stylesheet" href="main_user.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-sbi+c+NLCzrfNZT8e/OsyujVn6vJIoMCwzeKkbDn6w2oUa3TuF7fWhjiRl6A4XXYWSdRP3c5lMFOkp/3M8I2oA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
      <div class="sidebar">
        <h2>Dashboard</h2>
        <nav>
            <ul>
                <li><a href="#"><i class="fas fa-user"></i> Profile</a></li>
            <li><a href="#"><i class="fas fa-bullhorn"></i> Announcements</a></li>
            <li><a href="#" id="requests-link"><i class="fas fa-hand-holding"></i> Requests</a></li>
            <li><a href="#"><i class="fas fa-bell"></i> Notifications</a></li>
            <li><a href="#"><i class="fas fa-life-ring"></i> Help & Support</a></li>
            <li><a href="" id="logout-form"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
            </ul>
        </nav>
    </div>
    <button class="toggle-btn"><i class="fas fa-bars"></i></button>
    <div id="map"></div>


<div id="popup-form" style="display: none;">
  <form>
    <!-- Add your form fields here -->
    <div class="container">
     <label for="item">Item</label>
      <input type="text" id="item" name="item" autocomplete="off" required>
      </div>
      <div class="container">
      <label>People</label>
      <input type="number" id="quantity" name="quantity" min="1" autocomplete="off" required>
      </div>
      <div class="container">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" name="latitude" autocomplete="off" required>
      </div>
      <div class="container">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" name="longitude" autocomplete="off" required>
      </div>
    <!-- Add more fields as needed -->
    <button type="submit" name="signup-submit" id="submit-button">Register</button>
  </form>
</div>
 
  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
  <script src="main_user.js"></script>
</body>
</html>
