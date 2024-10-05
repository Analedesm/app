const words = [
    { id: 1, word: 'CASA' },
    { id: 2, word: 'PERRO' },
    { id: 3, word: 'GATO' }
];

const images = [
    { id: 1, img: 'CASA.jpg' },
    { id: 2, img: 'Perro.jpeg' },
    { id: 3, img: 'gato.jpeg' }
];

let selectedWord = null;
let selectedImage = null;

function createItems() {
    const wordsContainer = document.getElementById('words');
    const imagesContainer = document.getElementById('images');

    words.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('item');
        wordDiv.textContent = word.word;
        wordDiv.dataset.id = word.id;
        wordDiv.addEventListener('click', () => selectWord(wordDiv));
        wordsContainer.appendChild(wordDiv);
    });

    images.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('item');
        const img = document.createElement('img');
        img.src = image.img;
        img.alt = image.img;
        imgDiv.appendChild(img);
        imgDiv.dataset.id = image.id;
        imgDiv.addEventListener('click', () => selectImage(imgDiv));
        imagesContainer.appendChild(imgDiv);
    });
}

function selectWord(element) {
    if (selectedWord) {
        selectedWord.classList.remove('selected');
    }
    selectedWord = element;
    selectedWord.classList.add('selected');
    checkMatch();
}

function selectImage(element) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }
    selectedImage = element;
    selectedImage.classList.add('selected');
    checkMatch();
}

function checkMatch() {
    if (selectedWord && selectedImage) {
        if (selectedWord.dataset.id === selectedImage.dataset.id) {
            selectedWord.classList.add('matched');
            selectedImage.classList.add('matched');
        }
        selectedWord.classList.remove('selected');
        selectedImage.classList.remove('selected');
        selectedWord = null;
        selectedImage = null;
    }
}

createItems();
