document.addEventListener('DOMContentLoaded', function () {
  const verifyBtn = document.getElementById('verifyBtn');
  const message = document.getElementById('message');
  const inputs = document.querySelectorAll('input[type="text"]');
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Theme handling
  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  };
  // Initialize theme (light by default)
  setTheme('light');
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // OTP verification
  verifyBtn.addEventListener('click', function () {
    const otp = Array.from(inputs).map(input => input.value).join('');
    if (otp.length === 0) {
      message.textContent = 'Please enter OTP digits.';
    } else {
      message.textContent = `Entered OTP: ${otp}`;
    }
  });
});
const verifyBtn = document.getElementById('verifyBtn');
const message = document.getElementById('message');
const inputs = document.querySelectorAll('input[type="text"]');
verifyBtn.addEventListener('click', function () {
  // Collect OTP digits
  const otp = Array.from(inputs).map(input => input.value).join('');
  if (otp.length === 0) {
    message.textContent = 'Please enter OTP digits.';
  } else {
    message.textContent = `Entered OTP: ${otp}`;
  }
});
