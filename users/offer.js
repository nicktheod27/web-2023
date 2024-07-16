document.addEventListener('DOMContentLoaded', function() {
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
