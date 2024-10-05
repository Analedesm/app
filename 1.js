// Generar un número aleatorio entre 1 y 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Obtener el valor ingresado por el usuario
    let userGuess = document.getElementById('guessInput').value;
    let result = '';

    // Comparar la adivinanza del usuario con el número secreto
    if (userGuess == secretNumber) {
        result = '¡Correcto! Has adivinado el número.';
    } else if (userGuess < secretNumber) {
        result = 'El número es mayor. Intenta de nuevo.';
    } else {
        result = 'El número es menor. Intenta de nuevo.';
    }

    // Mostrar el resultado
    document.getElementById('result').textContent = result;
}
