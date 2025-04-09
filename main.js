function validateForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("login-message");

  if (username === "OMXMH" && password === "breathers") {
    window.location.href = "./working.html";
  } else {
    messageElement.textContent = "You have to type a valid username and password";
    messageElement.style.color = "red";
    messageElement.style.fontSize = "small";
  }
}
function resetPassword(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("co-password").value;
  const messageElement = document.getElementById("reset-title");

  if (!email || !password || !confirmPassword) {
    messageElement.textContent = "Please Enter All The Information";
    messageElement.style.color = "red";
  } else if (password !== confirmPassword) {
    messageElement.textContent = "Passwords do not match";
    messageElement.style.color = "red";
  } else {
    window.location.href = "./working.html";
  }
}
