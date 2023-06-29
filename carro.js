//codigos para os carros

//lista carros
let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [45, 100, 150, 215, 265, 320];
let spdCarro = [4, 3.5, 4.2, 3.2, 4.6, 5];
let larguraCarro = 40;
let alturaCarro = 30;


//funcao para mostrar carros
function mostraCarro(){
  for(let i = 0; i < carros.length; i++){
    image(carros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro);  
  }
}

// funcao movimenta carros com a variavel for
function movimentaCarro(){
  for(let i = 0; i < carros.length; i++){
   xCarro[i] -= spdCarro[i];    
  }
}

//funcao loop carros
function loopCarro(){
  for(let i = 0; i < carros.length; i++){
    if(passouTela(xCarro[i])){
      xCarro[i] = 600;
    }    
  }
}

//funcao calculo do ponto de partida, return usado para retornar informacao
function passouTela(xCarro){
  return xCarro < -50;  
}





