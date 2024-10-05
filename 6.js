document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#images img');
    const buttons = document.querySelectorAll('#sounds button');
    const messageDiv = document.getElementById('message');
    let selectedSound = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedSound = button.getAttribute('data-sound');
            const audio = new Audio(selectedSound);
            audio.play();
        });
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            const imageSound = image.getAttribute('data-sound');
            if (selectedSound === imageSound) {
                messageDiv.textContent = '¡Correcto! ¡Felicidades!';
                messageDiv.style.color = 'green';
            } else {
                messageDiv.textContent = 'Inténtalo de nuevo.';
                messageDiv.style.color = 'red';
            }
        });
    });
});
