let i = 0;
let images = [];
let timer = 3000;

images[0] = '../imagens/imagem-objetivo1.png';
images[1] = '../imagens/imagem-objetivo2.png';
images[2] = '../imagens/imagem-objetivo3.png';

const changeImg = () => {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, timer);
}
window.onload = changeImg;