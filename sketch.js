
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor1();
  mostraCarro();
  movimentaCarro();
  movimentaAtor1();
  loopCarro();
  passouTela();
  verificaColisao();
  incluiMeusPontos();
  marcaPontos();
  pontosMaiorQueZero();
  podeMoverAtor1();
  
}
