 // Abrir e fechar o menu de acessibilidade
 document.querySelector('.botao-acessibilidade').addEventListener('click', function () {
    const panel = document.querySelector('.painel-acessibilidade');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
  
  function DislexiaFont() {
    const body = document.body;
    if (body.classList.contains('dislexia-font')) {
      body.classList.remove('dislexia-font'); // Remove a fonte se já estiver aplicada
    } else {
      body.classList.add('dislexia-font'); // Aplica a fonte dislexa
    }
  }
  function destacarTitulos() {
              // Seleciona todos os títulos 
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
  function destacarLinks() {
          // Seleciona todos os links <a> na página
          const todosLinks = document.querySelectorAll('a');
  
          // Verifica se algum link já tem a classe 'destaque-links'
          const umLink = todosLinks[0].classList.contains('destaque-links');
  
          // Se os links já estão destacados, remove o destaque
          if (umLink) {
              todosLinks.forEach(link => {
                  link.classList.remove('destaque-links');
              });
          } else {
              // Se os links não estão destacados, adiciona o destaque
              todosLinks.forEach(link => {
                  link.classList.add('destaque-links');
              });
          }
      }


      const perguntasF = document.querySelectorAll(".perguntas-frequentes");

perguntasF.forEach(perguntaFrequente => {
    const pergunta = perguntaFrequente.querySelector(".pergunta");
    const resposta = perguntaFrequente.querySelector(".resposta");
    const icone = perguntaFrequente.querySelector("i");

    // Adicionar o evento de clique na pergunta
    pergunta.addEventListener('click', () => {
        // Alternar a visibilidade da resposta
        resposta.classList.toggle("mostrar");

        // Alternar o ícone (de "+" para "-")
        icone.classList.toggle("fa-circle-plus");
        icone.classList.toggle("fa-circle-minus");
    });
});


      