function showHiddenImage(element) {
    const hiddenImage = element.nextElementSibling;
    hiddenImage.style.display = 'block';
    setTimeout(() => {
        hiddenImage.style.display = 'none';
    }, 1000);
}
