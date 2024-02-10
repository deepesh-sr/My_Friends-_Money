import React from 'react';

const Login = () => {
    const authenticateAndRedirect = () => {
        // Perform authentication logic (replace this with server-side authentication)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example: Check if username and password match
        if (username === "testusername" && password === "testpassword") {
            // Authentication successful
            // Store a simple authentication token (replace with a more secure method)
            localStorage.setItem('authToken', 'yourAuthToken');

            // Redirect to the dashboard
            window.location.href = 'TransactionForm.jsx';
        } else {
            alert('Username and password are incorrect. Please try again.');
        }
    };

    return (
        <form id="loginForm">
            <h2>My Friends Money</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter username" defaultValue="testusername" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter password" defaultValue="testpassword" required />

            <button type="button" onClick={authenticateAndRedirect}>Login</button>
        </form>
    );
};

export default Login;
