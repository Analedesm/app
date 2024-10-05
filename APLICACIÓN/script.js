// script.js
const words = [
    { word: "perro", image: "Perro.jpeg" },
    { word: "gato", image: "gato.jpeg" },
    { word: "casa", image: "CASA.jpg" },
    { word: "mesa", image: "mesa.jpg" }
];

let currentWordIndex = 0;
let currentWord = words[currentWordIndex];
let firstSyllable = currentWord.word.slice(0, 2);

document.getElementById("word-image").src = currentWord.image;
document.getElementById("word-display").textContent = firstSyllable + "_".repeat(currentWord.word.length - 2);

function checkWord() {
    const input = document.getElementById("word-input").value.toLowerCase();
    if (input === currentWord.word.slice(2)) {
        document.getElementById("message").textContent = "¡Correcto! La palabra es " + currentWord.word;
        setTimeout(nextWord, 2000);
    } else {
        document.getElementById("message").textContent = "Incorrecto, intenta de nuevo.";
    }
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex < words.length) {
        currentWord = words[currentWordIndex];
        firstSyllable = currentWord.word.slice(0, 2);
        document.getElementById("word-image").src = currentWord.image;
        document.getElementById("word-display").textContent = firstSyllable + "_".repeat(currentWord.word.length - 2);
        document.getElementById("word-input").value = "";
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("message").textContent = "¡Felicidades, has completado todas las palabras!";
        document.getElementById("word-display").textContent = "";
        document.getElementById("word-image").style.display = "none";
        document.getElementById("word-input").style.display = "none";
        document.querySelector("button").style.display = "none";
    }
}
