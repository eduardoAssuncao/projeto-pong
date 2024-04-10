/*-------Bolinha info---------*/
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;
/*----Velocidade bolinha-----*/
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;
/*-------Raquete info-------*/
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
/*---------Colisão----------*/
let esquerdaBolinha = xBolinha - raio;
let superiorBolinha = yBolinha - raio;
let inferiorBolinha = yBolinha + raio;
let direitaRaquete = xRaquete + comprimentoRaquete;
let superiorRaquete = yRaquete;
let inferiorRaquete = yRaquete + alturaRaquete;
/*------Raquete oponente-----*/
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
/*---------Placar-------------*/
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  desenharBolinha();
  desenharRaquete(xRaquete, yRaquete);
  desenharRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoBolinha();
  direcaoBolinha();
  movimentarRaquete();
  movimentarRaqueteOponente();
  verificarColisaoRaquete();
  //verificarColisaoRaqueteOponente();
  colisaoRaqueteOponeneteBiblioteca()
  //colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  //colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  incluiPlacar();
  marcaPonto();
}

function desenharBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function desenharRaquete(x, y){
  rect(x, y, comprimentoRaquete,       alturaRaquete);
    
}

function movimentoBolinha(){
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function direcaoBolinha(){
  
  if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1;
  }
  
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
  }
}

function movimentarRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 4;
  } 
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 4;
  }
  
  yRaquete = constrain(yRaquete, 10, 310);
}

function movimentarRaqueteOponente(){
  /*velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 60;
  yRaqueteOponente += velocidadeYOponente;
  
  yRaqueteOponente = constrain(yRaqueteOponente, 10, 310);*/
  if(keyIsDown(87)){
    yRaqueteOponente -= 4;
  } 
  
  if(keyIsDown(83)){
    yRaqueteOponente += 4;
  }
  
  yRaquete = constrain(yRaquete, 10, 310);
}

function verificarColisaoRaquete(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
     velocidadeXBolinha *= -1;
  }
}

/*function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}*/

function verificarColisaoRaqueteOponente(){
  if(xBolinha - raio < xRaqueteOponente + comprimentoRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete && yBolinha + raio > yRaqueteOponente){
     velocidadeXBolinha *= -1;
  }
}

function colisaoRaqueteOponeneteBiblioteca(){
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha < 0){
    xBolinha = 300;
    yBolinha = 200;
  }
  
   if(xBolinha > 600){
    xBolinha = 300;
    yBolinha = 200;
  }
  
  if(xBolinha > 590){
    meusPontos += 1;
  }
  
  if(xBolinha < 10){
    pontosOponente += 1;
  }
  
  
}