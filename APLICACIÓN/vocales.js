let currentScene = 1;
const totalScenes = 5;

function nextScene() {
    document.getElementById(`scene${currentScene}`).classList.remove('active');
    currentScene++;
    if (currentScene > totalScenes) {
        currentScene = 1;
    }
    document.getElementById(`scene${currentScene}`).classList.add('active');
}
