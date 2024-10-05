const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const numeroDisplay = document.getElementById('numero');
const resultadoDisplay = document.getElementById('resultado');
let numeroActual = 0;
let puntos = [];

function generarNumero() {
    numeroActual = Math.floor(Math.random() * 10);
    numeroDisplay.textContent = `Trazar el número: ${numeroActual}`;
    dibujarNumero(numeroActual);
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function verificarTrazo() {
    // Aquí puedes agregar la lógica para verificar si el número trazado es correcto
    // Por simplicidad, asumiremos que siempre es correcto
    const esCorrecto = compararPuntos(puntos, numeroActual);
    if (esCorrecto) {
        resultadoDisplay.textContent = '¡Correcto!';
    } else {
        resultadoDisplay.textContent = 'Incorrecto, intenta de nuevo.';
    }
    limpiarCanvas();
    generarNumero();
    puntos = [];
}

function dibujarNumero(numero) {
    ctx.setLineDash([5, 5]); // Líneas punteadas
    ctx.font = '100px Arial';
    ctx.strokeText(numero, 150, 200);
    ctx.setLineDash([]); // Restablecer a líneas sólidas
}

function compararPuntos(puntos, numero) {
    // Lógica básica para comparar puntos trazados con el número esperado
    // Esta lógica puede ser mejorada con algoritmos de reconocimiento de patrones
    // Por ahora, asumimos que siempre es correcto
    return true;
}

canvas.addEventListener('mousedown', (e) => {
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    puntos.push({ x: e.offsetX, y: e.offsetY });

    canvas.addEventListener('mousemove', onMouseMove);
});

canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', onMouseMove);
    verificarTrazo();
});

function onMouseMove(e) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    puntos.push({ x: e.offsetX, y: e.offsetY });
}

// Iniciar el juego
generarNumero();
