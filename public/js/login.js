const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Login successful, redirect or perform any other necessary action
        window.location.href = '/dashboard.html';
      } else {
        // Login failed, display an error message or perform appropriate actions
        console.error('Login failed:', data.error);
      }
    })
    .catch(error => {
      console.error('Error occurred during login:', error);
    });
});
