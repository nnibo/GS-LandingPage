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

const enviarContato = document.getElementById('form-contato');
enviarContato.onsubmit = function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const msgContato = document.getElementById('msg-contato');
    msgContato.innerHTML = `<p style="color: black;">Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>`;
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
    setTimeout(() => {
        msgContato.innerHTML = '';
    }, 3000);
}

const quizForm = document.getElementById('quiz-form');
const resultadoDiv = document.getElementById('resultado');
quizForm.onsubmit = function(e) {
    e.preventDefault();

    let acertos = 0;
    for (let i = 1; i <= 10; i++) {
        const correta = document.getElementById(`correta${i}`);
        if (correta && correta.checked) acertos++;
    } 
    resultadoDiv.innerHTML = `<p style="font-size: 20px; color: white;">Você acertou ${acertos} de 10 questões.</p>`;
}


const modoEscuro = document.getElementById('modo-escuro');
modoEscuro.onclick = function() {
    document.body.style.backgroundColor = 'black';

    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'white';
    });

    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = 'white';
    });

    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = 'white';
    });   
}

const modoClaro = document.getElementById('modo-claro');
modoClaro.onclick = function() {
    document.body.style.backgroundColor = 'white';

    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'black';
    });

    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = 'black';
    });

    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = 'black';
    });

    document.querySelectorAll('.p-white').forEach(p => {
        p.style.color = 'white';
    });

    document.querySelectorAll('.h1-white').forEach(h1 => {
        h1.style.color = 'white';
    });

    document.querySelectorAll('.h3-white').forEach(h3 => {
        h3.style.color = 'white';
    });
}