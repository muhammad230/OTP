document.addEventListener('DOMContentLoaded', function() {
  const verifyBtn = document.getElementById('verifyBtn');
  const message = document.getElementById('message');
  const inputs = document.querySelectorAll('input[type="text"]');
  verifyBtn.addEventListener('click', function() {
    // Collect OTP digits
    const otp = Array.from(inputs).map(input => input.value).join('');
    if (otp.length === 0) {
      message.textContent = 'Please enter OTP digits.';
    } else {
      message.textContent = `Entered OTP: ${otp}`;
    }
  });
});