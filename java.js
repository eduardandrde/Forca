const perguntasF = document.querySelectorAll(".perguntas-frequentes");

perguntasF.forEach((perguntaFrequente) => {
    const pergunta = perguntaFrequente.querySelector(".pergunta");
    const icone = pergunta.querySelector("i");
    const resposta = perguntaFrequente.querySelector(".resposta");

    pergunta.addEventListener("click", () => {
        // Fechar todas as outras respostas
        perguntasF.forEach((outroPerguntaFrequente) => {
            const outraResposta = outroPerguntaFrequente.querySelector(".resposta");
            const outroIcone = outroPerguntaFrequente.querySelector("i");

            // Fechar as respostas e mostrar ícones de "+" em outras perguntas
            if (outroPerguntaFrequente !== perguntaFrequente) {
                outraResposta.classList.remove("mostrar");
                outroIcone.classList.add("fa-circle-plus");
                outroIcone.classList.remove("fa-circle-minus");
            }
        });

        // Alternar a visibilidade da resposta clicada
        resposta.classList.toggle("mostrar");

        // Alternar o ícone entre "+" e "-"
        icone.classList.toggle("fa-circle-plus");
        icone.classList.toggle("fa-circle-minus");
    });
});





      