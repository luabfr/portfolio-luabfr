let arbustoEnArray = []; 



function arbustoSetup(){
  let cantArbustosIniciales = Math.floor(map(fxrand(),0,1,1,10));
  for (let i = 0; i < cantArbustosIniciales; i++) {     
    let arbustoX = Math.floor(map(fxrand(),0,1,-200,width+200));
    let arbustoY = Math.floor(map(fxrand(),0,1,-200,height+200));
    arbustoEnArray.push(new Arbusto( arbustoX, arbustoY , Math.floor(map(fxrand(),0,1,100,300)),  Math.floor(map(fxrand(),0,1,15,30)) ) ); 
  }

}


function arbustoDraw(){
  for (let i = 0; i < arbustoEnArray.length; i++) {
    arbustoEnArray[i].dibujar();
  }
}


class Arbusto {  

  constructor( x, y , tamX, tamY ) {
    this.x = x;
    this.y = y;
    this.tamX = tamX;
    this.tamY = tamY;
    this.tono = Math.floor(map(fxrand(),0,1,0,80));
  }



  dibujar(){
    noStroke();    
    push();
    translate(this.x, this.y);  
    rotate(this.tono);      
    for(let i = 0; i < 12 ;i++){      
      ellipseMode(CORNER);    
      rotate(72*i+ (i*10));
      let tonoEnI = this.tono + (i*2);
      if(tonoEnI>=70){
        tonoEnI = 0;
      }
      fill( tonoEnI, 25, 50, 60+(i*3));
      ellipse(-20 , -50, this.tamX+(i*2),this.tamY+(i*10));  

      fill( tonoEnI, 35, 80, 60+(i*3));
      ellipse(-20 , -50, this.tamX+(i*1),this.tamY+(i*5));  
    };
    ellipseMode(CENTER);
    fill(this.tamY*2,10,20,70);
    ellipse( 0, 0 ,50 ,50);
    fill(this.tamY*2,30,30,70);
    ellipse( 0, 0 ,30 ,30);
    pop();
  }

}