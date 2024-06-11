function showLogin() {
    window.location.href = 'login.html';
}

function showRegister() {
    window.location.href = 'register.html';
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        generateOTP();
    } else {
        alert("Please fill in all the details."); 
    }
});

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (username === "" || email === "" || firstname === "" || lastname === "" || mobileNumber === "") {
        return false;
    }
    return true;
}

function generateOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);
    alert("Your OTP is: " + otp);

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    localStorage.setItem("generatedOTP", otp);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("mobileNumber", mobileNumber);

    console.log("User details stored in localStorage");
    window.location.href = 'otpregister.html';
}
