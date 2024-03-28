<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--=============== REMIXICONS ===============-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css" crossorigin="">
    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="login.css">
    <!--=============== JAVASCRIPT ========-->
    <title>Login form</title>
</head>
<body>
    <div class="login">
        <img src="reg.png" alt="image" class="login__bg">
        <?php 
        include("php/config.php");
        if(isset($_POST['submit'])){
            $email = mysqli_real_escape_string($conn,$_POST['email']);
            $password = mysqli_real_escape_string($conn,$_POST['password']);

            $result = mysqli_query($conn,"SELECT * FROM users WHERE Email='$email' AND Password='$password' ") or die("Select Error");
            $row = mysqli_fetch_assoc($result);

            if(is_array($row) && !empty($row)){
                $_SESSION['valid'] = $row['Email'];
                $_SESSION['username'] = $row['Username'];
                $_SESSION['id'] = $row['Id'];
                header("Location: main_user.php");
                exit(); // Make sure to exit after redirection
            }else{
                header("Location: login.php?error=wrong_creds");
                exit();
            }
            if(isset($_GET['error']) && $_GET['error'] === 'wrong_creds') {
               echo "<script> alert('Wrong Email or Password!'); </script>";
           }
        }
        ?>
        <form action="" method="post" class="login__form">
            <h1 class="login__title">Login</h1>
            <div class="login__inputs">
                <div class="login__box">
                    <input type="email" id="username" name="email" placeholder="Email ID" required class="login__input">
                    <i class="ri-mail-fill"></i>
                </div>
                <div class="login__box">
                    <input type="password" id="password" name="password" placeholder="Password" required class="login__input">
                    <i class="ri-lock-2-fill"></i>
                </div>
            </div>
            <button type="submit" name="submit" id="login-btn" class="login__button">Login</button>
            <div class="login__check">
                <div class="login__check-box">
                    <input type="checkbox"  class="login__check-input" id="user-check">
                    <label for="user-check" class="login__check-label">Remember me</label>
                </div>
                <a href="#" class="login__forgot">Forgot Password?</a>
            </div>
            <div class="login__register">
                Don't have an account? <a href="register.php">Register</a>
            </div>
        </form>
    </div>
    <script src="login.js"></script>
</body>
</html>
