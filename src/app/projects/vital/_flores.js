let floresEnArray = []; 
let alphaDeFlores = 50;
let apuntador;
let angBase;

let tamBaseDeLasHojasDeLasFloresMin;
let tamBaseDeLasHojasDeLasFloresMax;

function floresSetup(){

	tamBaseDeLasHojasDeLasFloresMin = Math.floor( map(fxrand(),0,1,30,80) );
	tamBaseDeLasHojasDeLasFloresMax = Math.floor( map(fxrand(),0,1,60,140) );
	let cantFloresIniciales = Math.floor(map(fxrand(),0,1,5,20)); 
	let angBase = Math.floor(map(fxrand(),0,1,0,20));

	for (let i = 0; i < cantFloresIniciales; i++) {    
    floresEnArray.push(new Flores( Math.floor(map(fxrand(),0,1,0,width)) , Math.floor(map(fxrand(),0,1,0,height)) , cantFloresIniciales ));
  }

}



function floresDraw(){
	for (let i = 0; i < floresEnArray.length; i++) {
    floresEnArray[i].dibujar();
  }
}




class Flores {  

  constructor( x_, y_ , cantFloresIniciales_ ) {    
    this.x = x_;
    this.y = y_;
    this.ang = Math.floor(map(fxrand(),0,1,0,360));
    this.petalo = Math.floor(map(fxrand(),0,1,tamBaseDeLasHojasDeLasFloresMin,tamBaseDeLasHojasDeLasFloresMax));
    this.grosor = Math.floor(map(fxrand(),0,1,3,7));
    this.h = map(fxrand(),0,1,tonoNatura,tonoNatura+20);
    this.s = 50;
    this.b = map(fxrand(),0,1,60,90);

  }

  dibujar( activar_flor) {
    strokeWeight(3);

    if (this.activar_flor){
      this.ang++;
    }
     
    push();    

    translate(this.x, this.y);
    for(let i=0; i<3; i++){
    	let anguloDeSegundaFlor = i*10;
    	angleMode(DEGREES);
	    rotate( this.ang );
	    
	    
	    // Flor:Sombras
	    noStroke();  
	    fill(50,5);
	    ellipse(0, 0, this.petalo, this.petalo);
	    ellipse(0, 0, this.petalo-10, this.petalo-10 );
	    ellipse(0, 0, this.petalo-20, this.petalo-20 );
	 
	    // Flor: this.Petalos
	    fill(this.h+anguloDeSegundaFlor, this.s+anguloDeSegundaFlor, this.b, alphaDeFlores);
	    ellipse(0+this.petalo/2,0,this.petalo,this.petalo/this.grosor);
	    ellipse(0-this.petalo/2,0,this.petalo,this.petalo/this.grosor);
	    ellipse(0,0+this.petalo/2,this.petalo/this.grosor,this.petalo);
	    ellipse(0,0-this.petalo/2,this.petalo/this.grosor,this.petalo);
	 
	    //fill(col+50);   
	    fill(this.h, this.s, this.b, alphaDeFlores);
	    beginShape();// ARRIBA
	    vertex(0,-this.petalo);
	    vertex(this.petalo/4-5,-this.petalo/4);
	    vertex(0,0);
	    vertex(-this.petalo/4+5,-this.petalo/4);
	    endShape(CLOSE);
	    
	    beginShape();//DERECHA
	    vertex(this.petalo,0); //der
	    vertex(this.petalo/4,this.petalo/4-5); //abajo
	    vertex(0,0); //centro
	    vertex(this.petalo/4,-this.petalo/4+5); //arriba
	    endShape(CLOSE);
	   
	    beginShape();// ABAJO
	    vertex(0,0);  //centro
	    vertex(this.petalo/4-5,this.petalo/4); //der
	    vertex(0,this.petalo); //abajo
	    vertex(-this.petalo/4+5,this.petalo/4);  //izk
	    endShape(CLOSE);
	   
	    beginShape();//IZKIERDA
	    vertex(0,0);     //centro
	    vertex(-this.petalo/4,this.petalo/4-5); //abajo
	    vertex(-this.petalo, 0);     //izk
	    vertex(-this.petalo/4,-this.petalo/4+5);  //arriba
	    endShape(CLOSE);

	    //Flor: Linea de la hoja (nervio)   
	    strokeWeight(3);
	    stroke(255,50);
	    line(-this.petalo,0,this.petalo,0);
	    line(0,this.petalo,0,-this.petalo);
	  
	    //Flor: Centro (pistilo)
	    fill(this.h-20,60,70);
	    ellipse(0,0,this.petalo/3,this.petalo/3);
	    ellipse(0,0,this.petalo/6,this.petalo/6);
    }
    pop();
    
  }
  cambiarPosicion( nuevo_x , nuevo_y ){
    this.x = nuevo_x;
    this.y = nuevo_y;
  } 
  
}

