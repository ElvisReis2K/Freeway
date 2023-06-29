//codigos para o ator

//movimenta ator1
let yAtor1 = 370;
let xAtor1 = 280;

//variavel colisao
let colisao = false;


function mostraAtor1(){
  image(ator1,xAtor1,yAtor1,25,22);
}

function movimentaAtor1(){
  if(keyIsDown(UP_ARROW)){
    yAtor1 = yAtor1 - 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (podeMoverAtor1()){
     yAtor1 = yAtor1 + 2; 
    }        
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < carros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], larguraCarro, alturaCarro, xAtor1, yAtor1, 15)
    if (colisao){
      colidiu();
      somDaColisao.play();
        if (pontosMaiorQueZero()){
          meusPontos -=1;
       }
    }
  }
}



function colidiu(){
  yAtor1=370;
       
  
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeMoverAtor1(){
  return yAtor1 < 370
}


