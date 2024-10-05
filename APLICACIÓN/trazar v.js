const vowels = [
    { letter: 'A', points: [[300, 50], [200, 350], [400, 350], [300, 50], [300, 200], [250, 350], [350, 350]] },
    { letter: 'E', points: [[200, 50], [200, 350], [400, 50], [200, 200], [350, 200], [200, 350], [400, 350]] },
    { letter: 'I', points: [[300, 50], [300, 350], [300, 50], [300, 100], [300, 300], [300, 350]] },
    { letter: 'O', points: [[300, 50], [200, 150], [200, 250], [300, 350], [400, 250], [400, 150], [300, 50]] },
    { letter: 'U', points: [[200, 50], [200, 300], [300, 350], [400, 300], [400, 50]] }
];

let currentVowelIndex = 0;
const canvas = document.getElementById('tracingCanvas');
const ctx = canvas.getContext('2d');

function drawVowel(vowel) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    vowel.points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point[0], point[1]);
        } else {
            ctx.lineTo(point[0], point[1]);
        }
    });
    ctx.stroke();
}

function nextVowel() {
    currentVowelIndex = (currentVowelIndex + 1) % vowels.length;
    drawVowel(vowels[currentVowelIndex]);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

let drawing = false;

function startDrawing() {
    drawing = true;
    ctx.beginPath();
    ctx.setLineDash([]);
}

function stopDrawing() {
    drawing = false;
}

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

drawVowel(vowels[currentVowelIndex]);
