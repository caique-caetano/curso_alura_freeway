//Variaveis do Carro


function setup(){
    createCanvas(500, 400);
    somDaTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();    
    movimentaAtor();
    voltaCarroParaPosicaoInicial();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }