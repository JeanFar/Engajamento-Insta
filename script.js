     document.addEventListener("DOMContentLoaded", function() {
        let btnEnviarPerfil = document.getElementById("submit_perfil");
        let btnEnviarFeed = document.getElementById("submit_feed");
        let btnEnviarExplore = document.getElementById("submit_explore");
        let btnEnviarStorie = document.getElementById("submit_stories");
    
        function isValidNumber(value) {
            return !isNaN(value) && isFinite(value);
        }
    
        btnEnviarPerfil.addEventListener("click", function() {
            let perfil = document.getElementById("perfil").value; // Obtendo o valor do input de perfil
            let perfilLinkElement = document.getElementById("perfilLink");
            perfilLinkElement.href = "https://instagram.com/" + perfil; // Alterando o atributo href para o link do perfil
        });
    
        btnEnviarFeed.addEventListener("click", function() {
            let inputSeguidoresFeed = parseFloat(document.querySelector(".forms_feed .seguidores").value);
            let mediaDirect = parseFloat(document.getElementById("media_direct").value);  
            let mediaComentarios = parseFloat(document.getElementById("media_comentarios").value); 
            let mediaCompartilhamentos = parseFloat(document.getElementById("media_compartilhamentos").value); 
            let mediaSalvamentos = parseFloat(document.getElementById("media_salvamentos").value); 
            let mediaCurtidasFeed = parseFloat(document.getElementById("media_curtidas_feed").value); 
            let mediaVisualizacoesStories = parseFloat(document.querySelector(".media_visualizacoes_stories").value);
    
            if (isValidNumber(inputSeguidoresFeed) && isValidNumber(mediaDirect) && isValidNumber(mediaComentarios) &&
                isValidNumber(mediaCompartilhamentos) && isValidNumber(mediaSalvamentos) && isValidNumber(mediaCurtidasFeed) && 
                isValidNumber(mediaVisualizacoesStories)) {
    
                let engfeed = ((mediaDirect * 5 + mediaVisualizacoesStories * 4 + mediaComentarios * 3 + mediaCompartilhamentos * 2 + mediaSalvamentos * 1 + mediaCurtidasFeed * 0.5) / inputSeguidoresFeed) * 100;
                document.getElementById("engfeed").innerText = engfeed.toFixed(2) + "%";
            } else {
                document.getElementById("engfeed").innerText = "Por favor, insira valores válidos.";
            }
        });
    
        btnEnviarExplore.addEventListener("click", function() {
            let inputSeguidoresExplore = parseFloat(document.querySelector(".forms_explore .seguidores").value); 
            let alcancenseg = parseFloat(document.getElementById("alcancenseg").value); 
            let alcanceseg = parseFloat(document.getElementById("alcanceseg").value);  
            let impressao = parseFloat(document.getElementById("impressao").value);
    
            if (isValidNumber(inputSeguidoresExplore) && isValidNumber(alcancenseg) && isValidNumber(alcanceseg) && isValidNumber(impressao)) {
                let engexplorar = ((alcancenseg * 5 + alcanceseg * 3 + impressao * 1) / inputSeguidoresExplore) * 100;
                document.getElementById("engExplorar").innerText = engexplorar.toFixed(2) + "%";
            } else {
                document.getElementById("engExplorar").innerText = "Por favor, insira valores válidos.";
            }
        });
    
        btnEnviarStorie.addEventListener("click", function() {
            let inputSeguidoresStorie = parseFloat(document.getElementById("seguidores_stories").value);
            let retensao = parseFloat(document.getElementById("retensao").value);
            let compartilhamentosStories = parseFloat(document.getElementById("compartilhamentos_stories").value);
            let respostas = parseFloat(document.getElementById("respostas").value);
            let mediaVisualizacoesStories = parseFloat(document.getElementById("mediavisualizacoesstories").value);
            let curtidasStories = parseFloat(document.getElementById("curtidas_stories").value);
    
            if (isValidNumber(inputSeguidoresStorie) && isValidNumber(retensao) && isValidNumber(compartilhamentosStories) &&
                isValidNumber(respostas) && isValidNumber(mediaVisualizacoesStories) && isValidNumber(curtidasStories)) {
    
                let engstories = ((retensao * 5 + compartilhamentosStories * 4 + respostas * 3 + mediaVisualizacoesStories * 2 + curtidasStories * 1) / inputSeguidoresStorie) * 100;
                document.getElementById("engstories").innerText = engstories.toFixed(2) + "%";
    
                let taxaengstories = (mediaVisualizacoesStories / inputSeguidoresStorie) * 100;
    
                let taxaStorieElement = document.getElementById("taxastories");
                let escalaStorieElement = document.getElementById("escalastories");
    
                if (taxaengstories < 5) {
                    taxaStorieElement.style.color = "red";
                    taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Ruim";
                    escalaStorieElement.innerText = "Considere melhorar seu conteúdo ou interagir mais com seu público";
                } else if (taxaengstories >= 5 && taxaengstories <= 10) {
                    taxaStorieElement.style.color = "blue";
                    taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Bom!";
                    escalaStorieElement.innerText = "Bom trabalho! Você pode aumentar ainda mais o engajamento com promoções ou eventos ao vivo.";
                } else {
                    taxaStorieElement.style.color = "green";
                    taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Ótimo!";
                    escalaStorieElement.innerText = "Excelente! Mantenha as estratégias que estão funcionando bem para você.";
                }
            } else {
                document.getElementById("engstories").innerText = "Por favor, insira valores válidos.";
            }
        });
    });
