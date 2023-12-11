
// Bugs
let mosquitasEnArray = []; 
let cantMosquitasIniciales;

function mosquitasSetup(){
	cantMosquitasIniciales = Math.floor(map(fxrand(),0,1,0,15));
  for (let i = 0; i < cantMosquitasIniciales; i++) {
    mosquitasEnArray.push(new Mosquitas( Math.floor(map(fxrand(),0,1,0,width)) , Math.floor(map(fxrand(),0,1,0,height)) ));
  }	
}


function mosquitasDraw(){
	for (let i = 0; i < cantMosquitasIniciales; i++) {
    mosquitasEnArray[i].dibujar();
  }
}


function dibujarCuerpoMosquitas( colCuerpo , colAlas, contAlas, tam ){

     strokeWeight(2);
     stroke(colCuerpo ,70,75);     
     fill( colCuerpo ,30,95);
     beginShape();
	     vertex(10,0); //Adelante
	     vertex(3,7); //Abajo
	     vertex(-10,0); //Atras
	     vertex(3,-7); //Arriba
     endShape(CLOSE);
     line(10,0,-10,0);
     
    // Mosquillas: Alas
    noStroke();
    contAlas++;
    if (contAlas%5==0) {
      fill(colAlas, 50, 90, 40);
      tam=15;
    }  
    else {
      fill(colAlas+10, 50, 90, 60);
      tam=12;
    }

    ellipse(0, -10, tam, tam);
    ellipse(0, 10, tam, tam);
    ellipse(-10, -6, tam-6, tam-6);
    ellipse(-10, 6, tam-6, tam-6);    
    
  
}




class Mosquitas {

	//------------------------------
	constructor( x ,  y ) {
		
		this.colAlas = Math.floor(map(fxrand(),0,1,10,30));
		this.colCuerpo = Math.floor(map(fxrand(),0,1,50,70));
		this.x = x;
    this.y = y;
    this.angulo = 0;
    this.destX = map(fxrand(),0,1,100,width+100) ;
    this.destY = map(fxrand(),0,1,100,height+100);
    this.despX; 
    this.despY;
    this.tam=20;    
    this.contAlas=0;

	}

	dibujar() {
    
    //lo muevo:
    if (this.x < this.destX) {
      this.despX = 3;    	
    } else if (this.x > this.destX) {
    	this.despX = -3;    
    } else if (this.x == this.destX) {
      this.despX = 0;    
    } if (this.y < this.destY) {
      this.despY = 3;    
    } else if (this.y > this.destY) {
      this.despY = -3;    
    } else if (this.y == this.destY) {
      this.despY = 0;    
    }

    this.x+=this.despX;
    this.y+=this.despY;

    if ( dist(this.x, this.y, this.destX, this.destY)<10 && frameCount%30==0 ) {
      this.destX = map(fxrand(),0,1,100,width+100) ;
    	this.destY = map(fxrand(),0,1,100,height+100) ;
    }

    this.angulo+= ((atan2(this.despY, this.despX)-this.angulo)/100.0);
    push();
	    translate(this.x, this.y);
	    rotate(this.angulo);  
	    dibujarCuerpoMosquitas( this.colCuerpo, this.colAlas, this.contAlas, this.tam );
    pop();
    this.contAlas ++;

  }

}
