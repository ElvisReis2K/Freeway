//variaveis placar
let meusPontos = 0;

//edicao do placar
function incluiMeusPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);  
}

function marcaPontos(){
  if (yAtor1 < 15){
    meusPontos += 1;
    colidiu();
    somDoPonto.play();
    
  }
}

