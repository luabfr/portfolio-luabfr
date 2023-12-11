//let radioBurbujas = 20;
let radioBurbujas =[]
let totalBurbujas = 20;
let contadorBurbujas=0;
let xBurbujas = [];  
let yBurbujas = [];

function burbujasSetup(){
  noCursor();
  for (let i = 0; i < totalBurbujas; i++) {    
    xBurbujas.push(round(map(fxrand(),0,1,-4,4) )); 
    yBurbujas.push(round(map(fxrand(),0,1,-4,4) )); 
    radioBurbujas.push(round(map(fxrand(),0,1,10,30) )); 
  }
}


function burbujasDibujar(){
  for ( let i=0 ; i<totalBurbujas ; i++ ) {
    fill(100,50);
    strokeWeight(2);
    stroke(50,20);
    ellipse( xBurbujas[i], yBurbujas[i], radioBurbujas[i], radioBurbujas[i] );

    xBurbujas[i]+=round(map(fxrand(),0,1,-2,2) );
    yBurbujas[i]+=round(map(fxrand(),0,1,-2,2) );
  }
}
