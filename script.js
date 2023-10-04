// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const inputBox = document.getElementById("inputBox");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    const userGuess = parseInt(inputBox.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;
        if (userGuess === targetNumber) {
            message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
            submitButton.disabled = true;
        } else if (userGuess < targetNumber) {
            message.textContent = "Try a higher number.";
        } else {
            message.textContent = "Try a lower number.";
        }
    }

    inputBox.value = "";
    inputBox.focus();
});

// Check the user's preferred color scheme and toggle the 'dark' class
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}
