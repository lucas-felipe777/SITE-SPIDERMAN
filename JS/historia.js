document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter-text"); // Seleciona o parágrafo com o ID
    const textContent = textElement.textContent.trim(); // Armazena o texto do parágrafo
    textElement.textContent = ""; // Limpa o conteúdo inicial para aplicar o efeito
  
    let index = 0; // Índice para o efeito de digitação
  
    // Função recursiva para simular a digitação
    function typeWriterEffect() {
      if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index); // Adiciona um caractere ao texto
        index++;
        setTimeout(typeWriterEffect, 50); // Tempo entre cada caractere (50ms)
      }
    }
  
    // Inicia o efeito
    typeWriterEffect();
  });
  