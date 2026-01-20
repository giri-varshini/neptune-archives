function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error-msg");

    const correctPassword = "49032";

    if (input === correctPassword) {
        window.location.href = "home.html";
    } else {
        error.textContent = "Authentication failed. Try again.";
    }
}
