document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (mobileNumber) {
        localStorage.setItem("mobileNumber", mobileNumber); // Store the mobile number
        generateOTP();
    } else {
        alert("Please enter your mobile number.");
    }
});

function generateOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Your OTP is: " + otp);
    localStorage.setItem("generatedOTP", otp);
    window.location.href = 'otplogin.html';
}

function showRegister() {
    window.location.href = 'register.html';
}
