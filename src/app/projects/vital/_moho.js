let mohoEnArray = []; 
let cantMohoIniciales;

function mohoSetup(){
  cantMohoIniciales = Math.floor(map(fxrand(),0,1,width/8,width/2));
  for (let i = 0; i < cantMohoIniciales; i++) { 
    let guassianTendencia = Math.floor(map(fxrand(),0,1,10,30));
    let guassianMedio = Math.floor(map(fxrand(),0,1,0,30));
    let mohoX = Math.floor(map(fxrand(),0,1,0,width));
    let mohoY = Math.floor(map(fxrand(),0,1,0,height));
    //let mohoTam = randomGaussian(guassianMedio, guassianTendencia);
    let mohoTam = Math.floor(map(fxrand(),0,1,0,50));    
    mohoEnArray.push(new Moho( mohoX, mohoY, mohoTam )); 
  }

}


function mohoDraw(){
  for (let i = 0; i < cantMohoIniciales; i++) {
    mohoEnArray[i].dibujar();
  }
}


class Moho {  

  constructor( x, y , tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.h = Math.floor(map(fxrand(),0,1,tonoNatura-10,tonoNatura+10));
    this.s = Math.floor(map(fxrand(),0,1,saturacionNatura-5,saturacionNatura+5));
    this.b = Math.floor(map(fxrand(),0,1,brilloNatura-5,brilloNatura));
    this.ang = Math.floor(map(fxrand(),0,1,0,100));
  }

  dibujar(){
    push();
      translate(0, 0);
      rotate(this.ang)
      noStroke();
      fill(this.h, this.s, this.b, 100);
      ellipse(this.x, this.y, this.tam, this.tam+5);
    pop();  
  }

}