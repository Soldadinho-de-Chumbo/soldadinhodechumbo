// Exibir ano atual no rodapé
document.getElementById('anoatual').textContent = new Date().getFullYear();

// Exibir data da última modificação do documento
document.getElementById('ultimaModificacao').textContent = document.lastModified;

// Ativar a música de fundo oculta na primeira interação, ajustando o volume pela metade
document.addEventListener('click', function iniciarAudio() {
    const audio = document.getElementById('audioNatal');
    if (audio) {
        audio.volume = 0.5; // Volume a 50%
        audio.play().catch(error => {
            console.log("A reprodução automática foi prevenida pelo navegador:", error);
        });
    }
    document.removeEventListener('click', iniciarAudio);
}, { once: true });

// ========================================== */
/* GERADOR DE FLOCOS DE NEVE BRILHANTES       */
/* ========================================== */
function criarNeve() {
    const quantidadeNeve = 45;

    for (let i = 0; i < quantidadeNeve; i++) {
        const floco = document.createElement('div');
        floco.classList.add('floco-neve');

        floco.style.left = Math.random() * window.innerWidth + 'px';

        const tamanho = Math.random() * 4 + 2;
        floco.style.width = tamanho + 'px';
        floco.style.height = tamanho + 'px';

        const duracaoQueda = Math.random() * 5 + 3;
        floco.style.animationDuration = duracaoQueda + 's, 3s';
        floco.style.animationDelay = Math.random() * 5 + 's, ' + (Math.random() * 2) + 's';
        floco.style.opacity = Math.random() * 0.7 + 0.3;

        document.body.appendChild(floco);
    }
}

criarNeve();

// ========================================== */
/* LOGICA DO POP-UP (LIGHTBOX) DAS IMAGENS    */
/* ========================================== */
const modal = document.getElementById('modalZoom');
const imgModal = document.getElementById('imgModal');
const imagensGaleria = document.querySelectorAll('.img-zoomavel');
const botaoFechar = document.querySelector('.botao-fechar');

imagensGaleria.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "block";
        imgModal.src = img.src;
    });
});

botaoFechar.addEventListener('click', () => {
    modal.style.display = "none";
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});