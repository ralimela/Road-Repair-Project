document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented.");
    var mobileNumber = document.getElementById("mobileNumber").value;
    if (mobileNumber) {
        console.log("Mobile number entered:", mobileNumber);
        generateOTP();
    } else {
        alert("Please enter your mobile number.");
    }
});

function generateOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp); 
    alert("Your OTP is: " + otp);
    localStorage.setItem("generatedOTP", otp);
    console.log("OTP stored in localStorage");
    window.location.href = 'otplogin.html';
}

function showRegister() {
    window.location.href = 'register.html';
}
