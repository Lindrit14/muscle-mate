
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
       
        window.location.href = '/login.html';

      } else {
        
        console.error('Registration failed:', data.error);
      }
    })
    .catch(error => {
      console.error('Error occurred during registration:', error);
    });
});
