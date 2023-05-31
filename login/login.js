// Add event listeners to the form and buttons
const form = document.querySelector('form');
const signinButton = document.querySelector('.signin-button');
const signupLink = document.querySelector('.signup-link');

form.addEventListener('submit', handleSignin);
signinButton.addEventListener('click', handleSignin);
signupLink.addEventListener('click', handleSignup);

// Handle sign in form submission or button click
function handleSignin(event) {
  event.preventDefault();
  // Add your sign in logic here
}

// Handle sign up link click
function handleSignup(event) {
  event.preventDefault();
  // Add your sign up logic here
}
