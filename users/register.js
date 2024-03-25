// Function for whenever the user clicks the eye icon he can see or hide his password
const togglePasswordIcons = document.querySelectorAll('.togglePassword');
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetInput = document.getElementById(targetId);

        const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
        targetInput.setAttribute('type', type);
        this.classList.toggle('ri-eye-fill');
        this.classList.toggle('ri-eye-off-fill');
    });
});

const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // regex of password: at least 8 letters, 1 uppercase, 1 number:
const password_regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

document.addEventListener("DOMContentLoaded",function(){
    const registerButton = document.getElementById("register_button");
    const name_input = document.getElementById("name");
    const email_input = document.getElementById("email_input");
    const password_input1 = document.getElementById("password");
    const password_input2 = document.getElementById("password-repeat");
    
    registerButton.addEventListener("click",function(e){
        //if at least one field is empty alert user
        if(!name_input.value || !email_input.value || !password_input1.value || !password_input2.value){
            alert("Please fill in all the fields.")
        }
        //if email address isn't valid alert user
        if(!email_regex.test(email_input.value.trim())){
            alert("Please enter a valid email address.");
            //clear email field
            email_input.value = "";
            return;
        }
        //if password and repeat-password don't match alert user
        if(password_input1.value !== password_input2.value){
            alert('Passwords do not match');
            e.preventDefault();
        }
    });
