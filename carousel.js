// carousel.js

// Função para trocar as imagens do carrossel a cada 5 segundos
function trocarImagens() {
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
      interval: 5000, // Define o intervalo em milissegundos (5 segundos)
    });
  }
  
  // Chama a função para trocar as imagens assim que a página carrega
  document.addEventListener("DOMContentLoaded", trocarImagens);
  
  