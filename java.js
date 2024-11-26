 // Abrir e fechar o menu de acessibilidade
 document.querySelector('.accessibility-toggle').addEventListener('click', function () {
    const panel = document.querySelector('.accessibility-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
  
  // Alterar contraste
  function setContrast(mode) {
    if (mode === 'light') {
      document.body.style.filter = 'none';
    } else if (mode === 'dark') {
      document.body.style.filter = 'brightness(50%)';
    } else if (mode === 'invert') {
      document.body.style.filter = 'invert(1)';
    }
  }
  
  // Ajustar tamanho da fonte
  let fontSize = 16;
  function adjustFontSize(change) {
    fontSize += change;
    document.body.style.fontSize = fontSize + 'px';
  }
  
  function resetFontSize() {
    fontSize = 16;
    document.body.style.fontSize = fontSize + 'px';
  }
  
  // Alterar cor do texto
  function setTextColor(color) {
    document.body.style.color = color;
  }
  function toggleDyslexicFont() {
    const body = document.body;
    if (body.classList.contains('dyslexic-font')) {
      body.classList.remove('dyslexic-font'); // Remove a fonte se já estiver aplicada
    } else {
      body.classList.add('dyslexic-font'); // Aplica a fonte dislexa
    }
  }
  function destacarTitulos() {
              // Seleciona todos os títulos (h1, h2, h3, h4, h5, h6)
              const todosTitulos = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
              // Verifica se os títulos já estão destacados
              const jaDestacados = todosTitulos[0]?.classList.contains('titulo-destaque');
  
              // Adiciona ou remove o destaque
              if (jaDestacados) {
                  todosTitulos.forEach(titulo => {
                      titulo.classList.remove('titulo-destaque');
                  });
              } else {
                  todosTitulos.forEach(titulo => {
                      titulo.classList.add('titulo-destaque');
                  });
              }
          }
  function highlightLinks() {
          // Seleciona todos os links <a> na página
          const allLinks = document.querySelectorAll('a');
  
          // Verifica se algum link já tem a classe 'highlighted-links'
          const isHighlighted = allLinks[0].classList.contains('highlighted-links');
  
          // Se os links já estão destacados, remove o destaque
          if (isHighlighted) {
              allLinks.forEach(link => {
                  link.classList.remove('highlighted-links');
              });
          } else {
              // Se os links não estão destacados, adiciona o destaque
              allLinks.forEach(link => {
                  link.classList.add('highlighted-links');
              });
          }
      }