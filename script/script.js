let i = 0;
let images = [];
let texts = [];
let timer = 3000;

// IMAGE LIST
images[0] = '../imagens/defesa-civil-populacao.jpg';
images[1] = '../imagens/defesa-civil-enchente.jpg';
images[2] = '../imagens/policiais-enchente.jpg';

// TEXT LIST
texts[0] = 'Evitar perdas humanas e materiais durante enchentes, por meio de monitoramento em tempo real e alertas visuais.';
texts[1] = 'Aprimorar a comunicação entre cidadãos e equipes de resgate, garantindo respostas mais rápidas e direcionadas.';
texts[2] = 'Promover a conscientização sobre os riscos de enchentes e a importância da preparação comunitária.';
const changeImg = () => {
    document.slide.src = images[i];
    document.getElementById('slide-text').textContent = texts[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, timer);
}
window.onload = changeImg;

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.querySelector('.header-menu ul');
    
    menuToggle.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
    
});