// Obtendo uma referência para o botão "Enviar"
let btnEnviar = document.getElementById("submit");

// Adicionando um ouvinte de evento para o evento de clique no botão "Enviar"
btnEnviar.addEventListener("click", function() {
    // Obtendo os valores dos campos do formulário
    let perfil = document.getElementById("perfil").value;
    let seguidores = parseFloat(document.getElementById("seguidores").value); 
    let periodo = document.getElementById("periodo").value;
    let mediaDirect = parseFloat(document.getElementById("media_direct").value); 
    let mediaVisualizacoes = parseFloat(document.getElementById("media_visualizacoes").value); 
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

    // Calculando a variável engajamento do feed com base nos valores dos campos do formulário
    let engfeed = ((mediaDirect * 5 + mediaVisualizacoes * 4 + mediaComentarios * 3 + mediaCompartilhamentos * 2 + mediaSalvamentos * 1 + mediaCurtidasFeed * 0.5) / seguidores) * 100;
    
    // Variável de Engajamento do Explorar   Essa variável será normalizada para produzir um resultado entre 1 a 100%:
    // Pode ser analisada ao longo do tempo, ou por benchmarks, ou por interações qualitativas
    let engexplorar = ((alcancenseg*5 + alcanceseg*3 + impressao * 1)/seguidores * maximo) * 100;

    // Variável de engajamento dos stories:
    let engstories = ((retensao * 5 + compartilhamentosStories * 4 + respostas * 3 + mediaVisualizacoesStories * 2 + curtidasStories * 1) / seguidores) * 100;

    // Tabela da taxa de engajamento de stories visualização/seguidores bom, médio ou ruim
    let taxaengstories = (mediaVisualizacoesStories/seguidores) * 100;


}

