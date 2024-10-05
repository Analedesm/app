const canvas = document.getElementById('coloringCanvas');
const ctx = canvas.getContext('2d');
let currentColor = 'black';

function selectColor(color) {
    currentColor = color;
}

function drawImage() {
    const img = new Image();
    img.src = 'perro colorear.jpeg'; // Reemplaza con la URL de la imagen del perro
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function floodFill(x, y, fillColor) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const targetColor = getColorAtPixel(data, x, y);
    if (!colorsMatch(targetColor, fillColor)) {
        fillPixel(data, x, y, targetColor, fillColor);
        ctx.putImageData(imageData, 0, 0);
    }
}

function getColorAtPixel(data, x, y) {
    const index = (y * canvas.width + x) * 4;
    return [data[index], data[index + 1], data[index + 2], data[index + 3]];
}

function colorsMatch(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

function fillPixel(data, x, y, targetColor, fillColor) {
    const stack = [[x, y]];
    while (stack.length) {
        const [cx, cy] = stack.pop();
        const index = (cy * canvas.width + cx) * 4;
        if (colorsMatch(getColorAtPixel(data, cx, cy), targetColor)) {
            data[index] = fillColor[0];
            data[index + 1] = fillColor[1];
            data[index + 2] = fillColor[2];
            data[index + 3] = fillColor[3];
            stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
        }
    }
}

canvas.addEventListener('click', (event) => {
    const pos = getMousePos(canvas, event);
    const fillColor = hexToRgb(currentColor);
    floodFill(pos.x, pos.y, fillColor);
});

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255, 255];
}

drawImage();
