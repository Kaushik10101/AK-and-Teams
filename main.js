const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const username = document.querySelector('#username').value;
	const password = document.querySelector('#password').value;
	if (username === 'your_username' && password === 'your_password') {
		window.location.href = 'dashboard.html';
	} else {
		alert('Incorrect username or password!');
	}
});

