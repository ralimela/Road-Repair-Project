function showLogin() {
    window.location.href ='login.html'
 }
 function showRegister() {
     window.location.href ='register.html';
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
     var firstname = document.getElementById("firstname").value;
     var lastname = document.getElementById("lastname").value;
     var mobileNumber = document.getElementById("mobileNumber").value;
     if (firstname === "" || lastname === "" || mobileNumber === "") {
         return false;
     }
     return true;
 }
 function generateOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp); 
    alert("Your OTP is: " + otp);
    localStorage.setItem("generatedOTP", otp);
    console.log("OTP stored in localStorage");
    window.location.href = 'otpregister.html';
}