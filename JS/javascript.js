document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter-text"); // Seleciona o texto
    const textContent = textElement.textContent.trim(); // Armazena o conteúdo
    textElement.textContent = ""; // Limpa o conteúdo inicial para o efeito
  
    let index = 0; // Início do índice do texto
  
    function typeWriterEffect() {
      if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index); // Adiciona um caractere
        index++;
        setTimeout(typeWriterEffect, 50); // Tempo entre caracteres (50ms)
      }
    }
  
    typeWriterEffect(); // Inicia o efeito
  });
  