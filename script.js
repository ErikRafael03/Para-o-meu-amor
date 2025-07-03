const frases = [
  "Você é minha pessoa favorita 💖",
  "A cada dia te amo mais 🌹",
  "Obrigado por ser quem você é 😍",
  "Quero estar com você pra sempre 💍",
  "Você é a minha certeza 🥰",
  "Te amo sempre e para sempre! 🫶"
];

let msg = document.getElementById("mensagem");
let index = 0;

function mostrarFrase() {
  msg.style.opacity = 0;
  setTimeout(() => {
    msg.textContent = frases[index];
    msg.style.opacity = 1;
    index = (index + 1) % frases.length;
  }, 500);
}

mostrarFrase(); // mostra a primeira frase imediatamente
setInterval(mostrarFrase, 3000); // troca a cada 3 segundos