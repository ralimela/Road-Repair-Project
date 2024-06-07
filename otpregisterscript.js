function cancelOTP() {
    window.location.href = 'register.html';
}

function verifyOTP() {
    var enteredOTP = '';
    document.querySelectorAll('.otp-input').forEach(input => {
        enteredOTP += input.value;
    });

    var generatedOTP = localStorage.getItem("generatedOTP");

    if (enteredOTP === generatedOTP) {
        alert("Successfully registered.");
        setTimeout(() => {
            window.location.href = 'complaintspage.html';
        }, 100);
        
    }
    else
    {
        alert("Incorrect OTP. Please try again.");
        setTimeout(() => {
            window.location.href = 'register.html';
        }, 100);
    }

}
        document.querySelectorAll('.otp-input').forEach((input, index, inputs) => {
            input.addEventListener('input', () => {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });
