//codigos para as imagens

//imagens
let estrada;
let ator1;
let carro0;
let carro1;
let carro2;

let somDaColisao;
let somDoPonto


//carregamento das imagens do projeto
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  ator1 = loadImage("imagens/ator-1.png");
  carro0 = loadImage("imagens/carro-1.png");
  carro1 = loadImage("imagens/carro-2.png");
  carro2 = loadImage("imagens/carro-3.png");
  carros = [carro0, carro1, carro2, carro0, carro1, carro2];
  
//carregamento variaveis som
  somDaColisao = loadSound("sons/colisao.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}