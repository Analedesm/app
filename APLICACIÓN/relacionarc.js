document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.word');
    const images = document.querySelectorAll('.image');
    let selectedWord = null;

    words.forEach(word => {
        word.addEventListener('click', () => {
            const sound = new Audio(word.dataset.sound);
            sound.play();
            selectedWord = word;
        });
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (selectedWord && selectedWord.dataset.match === image.dataset.match) {
                selectedWord.classList.add('correct');
                image.classList.add('correct');
                selectedWord = null;
            }
        });
    });
});
