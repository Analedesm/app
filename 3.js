// Lista de imágenes principales y sus correspondientes sonidos e imágenes secundarias
const images = [
    { src: 'mesa.jpg', sound: 'correcto.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'CASA.jpg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    { src: 'gato.jpeg', sound: 'sound2.mp3', secondaryImage: 'nueve.jpeg' },
    // Añade más imágenes según sea necesario
];

const imageContainer = document.getElementById('image-container');

images.forEach((image, index) => {
    // Crear elemento de imagen principal
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = `Imagen ${index + 1}`;
    imgElement.style.cursor = 'pointer';

    // Crear elemento de imagen secundaria
    const secondaryImg = document.createElement('img');
    secondaryImg.src = image.secondaryImage;
    secondaryImg.alt = `Imagen secundaria de ${index + 1}`;
    secondaryImg.classList.add('secondary-image');

    // Añadir evento de clic a la imagen principal
    imgElement.addEventListener('click', () => {
        // Reproducir sonido
        const audio = new Audio(image.sound);
        audio.play();

        // Mostrar imagen secundaria
        secondaryImg.style.display = 'block';

        // Ocultar imagen secundaria después de 3 segundos
        setTimeout(() => {
            secondaryImg.style.display = 'none';
        }, 1000);
    });

    // Añadir imagen principal y secundaria al contenedor
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(secondaryImg);
});
