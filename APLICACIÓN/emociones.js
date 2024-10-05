// script.js
const countingImages = [
    { count: 3, image: "tres manzanas.avif" },
    { count: 5, image: "5 peras.avif" },
    { count: 7, image: "7 sapos.jpeg" },
    { count: 9, image: "9 estrellas.jpeg" }
];

let currentImageIndex = 0;
let currentImage = countingImages[currentImageIndex];

document.getElementById("count-image").src = currentImage.image;
generateOptions();

function generateOptions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = () => checkCount(i);
        optionsContainer.appendChild(button);
    }
}

function checkCount(selectedCount) {
    if (selectedCount === currentImage.count) {
        document.getElementById("message").textContent = "¡Correcto! Hay " + currentImage.count + " objetos.";
        setTimeout(nextImage, 2000);
    } else {
        document.getElementById("message").textContent = "Incorrecto, intenta de nuevo.";
    }
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex < countingImages.length) {
        currentImage = countingImages[currentImageIndex];
        document.getElementById("count-image").src = currentImage.image;
        document.getElementById("message").textContent = "";
    } else {
        document.getElementById("message").textContent = "¡Felicidades, has completado todas las imágenes!";
        document.getElementById("count-image").style.display = "none";
        document.getElementById("options-container").style.display = "none";
    }
}
