// Variables to store user data
let userData = {};

// Register function to store data in localStorage
function register() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const experience = document.getElementById('experience').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (name && age && experience && username && password) {
        // Save user data
        userData = { name, age, experience, username, password };
        localStorage.setItem('user', JSON.stringify(userData));
        
        alert("Registration successful!");

        // Hide registration form and show login form
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    } else {
        alert("Please fill all the fields.");
    }
}

// Login function to verify credentials
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && loginUsername === storedUser.username && loginPassword === storedUser.password) {
        alert("Login successful!");

        // Show personal data
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('displayData').style.display = 'block';

        document.getElementById('displayName').innerText = storedUser.name;
        document.getElementById('displayAge').innerText = storedUser.age;
        document.getElementById('displayExperience').innerText = storedUser.experience;
    } else {
        alert("Incorrect username or password.");
    }
}

// Logout function to reset the display
function logout() {
    document.getElementById('displayData').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
