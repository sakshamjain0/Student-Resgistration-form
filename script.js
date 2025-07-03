// Dark mode toggle
const modeToggle = document.getElementById('modeToggle');
function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  if (on) {
    modeToggle.textContent = '☀️ Light Mode';
  } else {
    modeToggle.textContent = '🌙 Dark Mode';
  }
}
modeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  setDarkMode(isDark);
});
if (window.localStorage) {
  if (localStorage.getItem('darkMode') === 'true') {
    setDarkMode(true);
  }
  modeToggle.addEventListener('click', () => {
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
}
// Show All Passwords functionality
const showAllPasswords = document.getElementById('showAllPasswords');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
showAllPasswords.addEventListener('change', function() {
  const type = this.checked ? 'text' : 'password';
  passwordInput.type = type;
  confirmPasswordInput.type = type;
});
