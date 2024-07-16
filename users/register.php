<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--=============== REMIXICONS ===============-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" crossorigin="">

    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="register.css">
    <title>Register form</title>
</head>
<body>
    <div class="register">
    <img src="reg-bg.jpg" alt="image" class="register__bg">
    <?php 
    include "config.php";

// Function to safely output JavaScript alerts
function js_alert($message) {
    echo "<script>alert('$message');</script>";
}

if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password_repeat = $_POST['password_repeat'];
    
    // Verifying unique email
    $verify_query = mysqli_query($conn, "SELECT email FROM users WHERE email='$email'");
    
    if(mysqli_num_rows($verify_query) != 0){
        header("Location: register.php?error=email_in_use");
        exit();
    } else {
        mysqli_query($conn, "INSERT INTO users (Username, Email, Password) VALUES ('$username', '$email', '$password')") or die("Error Occurred");
        header("Location: login.php?success=registration_successful");
        exit(); 
    }
}

if(isset($_GET['error']) && $_GET['error'] === 'email_in_use') {
    js_alert("Email already in use!");
}

// Check if there's a success flag in the URL
if(isset($_GET['success']) && $_GET['success'] === 'registration_successful') {
    js_alert("Registration Successful!");
}
?>
        <form action="" class="register__form" method="post">
            <h1 class="register__title">Register</h1>

            <div class="register__inputs">
                <div class="register__box">
                    <input type="text" id="username" name="username" placeholder="Username" required class="register__input">
                    <i class="ri-user-fill"></i>
                </div>
                <div class="register__box">
                    <input type="email" id="email_input" name="email" placeholder="Email ID" required class="register__input">
                    <i class="ri-mail-fill"></i>
                </div>

                <div class="register__box">
                    <input type="password" id="password" name="password" placeholder="Enter Password" required class="register__input">
                    <i class="ri-eye-fill togglePassword" data-target="password"></i>
                </div>

                <div class="register__box">
                    <input type="password" id="password-repeat" name="password_repeat" placeholder="Repeat Password" required class="register__input">
                    <i class="ri-eye-fill togglePassword" data-target="password-repeat"></i>
                </div>
            </div>

            <button type="submit" id="register_button" name="submit" class="register__button">Register</button>
            <div class="login__register">
               Already have an account? <a href="login.php">Log-in</a>
            </div>
        </form>
    </div>
    <script src="register.js"></script>
</body>
</html>
