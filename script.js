// Obtendo uma referência para o botão "Enviar"
let btnEnviar = document.getElementById("submit");

// Adicionando um ouvinte de evento para o evento de clique no botão "Enviar"
btnEnviar.addEventListener("click", function() {
    // Obtendo os valores dos campos do formulário
    // 
    let perfil = document.getElementById("perfil").value;
    // Atualizando o link do perfil com base no valor inserido
    let perfilLinkElement = document.getElementById("perfilLink");
    perfilLinkElement.href = "https://instagram.com/" + perfil;

    // Atualizando o texto do perfil selecionado
    let perfilSelecionadoElement = document.querySelector(".perfilselecionado");
    perfilSelecionadoElement.textContent = perfil;
// 
    let seguidores = parseFloat(document.getElementById("seguidores").value); 
    let periodo = document.getElementById("periodo").value;
    let mediaDirect = parseFloat(document.getElementById("media_direct").value);  
    let mediaComentarios = parseFloat(document.getElementById("media_comentarios").value); 
    let mediaCompartilhamentos = parseFloat(document.getElementById("media_compartilhamentos").value); 
    let mediaSalvamentos = parseFloat(document.getElementById("media_salvamentos").value); 
    let mediaCurtidasFeed = parseFloat(document.getElementById("media_curtidas_feed").value); 
    let alcancenseg = parseFloat(document.getElementById("alcancenseg").value); 
    let alcanceseg = parseFloat(document.getElementById("alcanceseg").value); 
    let alcancetotal = parseFloat(document.getElementById("alcancetotal").value); 
    let impressao = parseFloat(document.getElementById("impressao").value);
    let retensao = parseFloat(document.getElementById("retensao").value);
    let compartilhamentosStories = parseFloat(document.getElementById("compartilhamentos_stories").value);
    let respostas = parseFloat(document.getElementById("respostas").value);
    let mediaVisualizacoesStories = parseFloat(document.getElementById("media_visualizacoes_stories").value);
    let curtidasStories = parseFloat(document.getElementById("curtidas_stories").value);

    // Calculando a variável engfeed
    let engfeed = ((mediaDirect * 5 + mediaVisualizacoesStories * 4 + mediaComentarios * 3 + mediaCompartilhamentos * 2 + mediaSalvamentos * 1 + mediaCurtidasFeed * 0.5) / seguidores) * 100;
    document.getElementById("engfeed").innerText = engfeed.toFixed(2) + "%";

    // Variável de Engajamento do Explorar
    let engexplorar = ((alcancenseg*5 + alcanceseg*3 + impressao * 1)/seguidores) * 100;
    document.getElementById("engExplorar").innerText = engexplorar.toFixed(2) + "%";

    // Variável de taxa de crescimento do Explorar
    // let taxaexplorar = ((alcancetotal - alcanceseg) / alcanceseg) * 100;
    // document.getElementById("taxaexplorar").innerText = taxaexplorar.toFixed(2) + "%";

    // Variável de engajamento dos stories
    let engstories = ((retensao * 5 + compartilhamentosStories * 4 + respostas * 3 + mediaVisualizacoesStories * 2 + curtidasStories * 1) / seguidores) * 100;
    document.getElementById("engStories").innerText = engstories.toFixed(2) + "%";
// Calculando a taxa de visualizações por seguidores
    let taxaengstories = (mediaVisualizacoesStories / seguidores) * 100;

// Obtendo referência aos elementos no HTML
    let taxaStorieElement = document.getElementById("taxastorie");
    let escalaStorieElement = document.getElementById("escalastorie");

// Escala da taxa de engajamento dos stories
    if (taxaengstories < 5) {
        taxaStorieElement.style.color = "red";
        taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Ruim";
        escalaStorieElement.innerText = "Considere melhorar seu conteúdo ou interagir mais com seu público";
    }   else if (taxaengstories >= 5 && taxaengstories <= 10) {
    taxaStorieElement.style.color = "blue";
    taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Bom!";
    escalaStorieElement.innerText = "Bom trabalho! Você pode aumentar ainda mais o engajamento com promoções ou eventos ao vivo.";
    } else {
        taxaStorieElement.style.color = "green";
        taxaStorieElement.innerText = taxaengstories.toFixed(2) + "% - Ótimo!";
        escalaStorieElement.innerText = "Excelente! Mantenha as estratégias que estão funcionando bem para você.";
    }

});


