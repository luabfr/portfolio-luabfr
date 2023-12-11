let bugsEnArray = []; 
let propiedadesDelBug = [];
let cantDePropsDelBug = 7;
let tamArrBugs;
let cantBugsIniciales;
let targetBicho = [];
let targetBichoVector;

function bugsSetup(){

	cantBugsIniciales = Math.floor(map(fxrand(),0,1,0,10)) > 7  ? Math.floor(map(fxrand(),0,1,2,4)) : 1;
  let tamArrBugs =  60;
  for (let i = 0; i < cantBugsIniciales; i++) {    
    bugsEnArray.push(new Bugs( Math.floor(map(fxrand(),0,1,100,width-100)) , Math.floor(map(fxrand(),0,1,100,height-100)) ));
		targetBicho.push({
			x: Math.floor(map(fxrand(),0,1,0,width)),
			y: Math.floor(map(fxrand(),0,1,0,height))
		});
  }

}


function bichosDraw(){
	
  for (let i = 0; i < cantBugsIniciales; i++) {
  	targetBichoVector = createVector(targetBicho[i].x, targetBicho[i].y);
    bugsEnArray[i].seek(targetBichoVector);
    bugsEnArray[i].update();
    bugsEnArray[i].dibujar();

    if( (frameCount % (60 + i*100)) == 0 && !bloquearCambioDeTarget ){   
	    targetBicho[i].x = Math.floor(map(fxrand(),0,1,-100,width+100));
			targetBicho[i].y = Math.floor(map(fxrand(),0,1,-100,height+100));
	  }  
  }

}






function dibujarPatas( forma, pata_izk, pata_der, h1, s1, b1 ){
	strokeWeight(3);
	if (forma==0){
		stroke(h1, 70, 20);
		line(0-pata_izk, 0-40, 0, 0);
		line(0+pata_izk, 0-40, 0, 0);
		line(10-pata_der, 0+40, 0, 0);
		line(-10+pata_der, 0+40, 0, 0);
		fill(h1+10, s1+10, b1+40);
		ellipse(0-pata_izk, 0-40, 12, 12);
		ellipse(0+pata_izk, 0-40, 12, 12);
		ellipse(10-pata_der, 0+40, 12, 12);
		ellipse(-10+pata_der, 0+40, 12, 12);
	}else if(forma == 1){
		// Piernas ok -  atras derecha
		stroke(h1, 70, 50);
		line(0-pata_izk+20, 0-40, 0-pata_izk, -20);
		stroke(h1, 70, 70);
		line( 0 , 0 , 0-pata_izk, -20);
		// derecha adelante
		stroke(h1, 70, 50);
		line(0+pata_izk+20, 0-40, 0+pata_izk-20, -20);
		stroke(h1, 70, 70);
		line( 0 , 0 , 0+pata_izk-20, -20);			
		// atras izk
		stroke(h1, 70, 50);	
		line(10-pata_der, 0+20, 0+pata_izk-50, 40); 
		stroke(h1, 70, 70);
		line( 0 , 0 , 10-pata_der, 0+20 );
		// derecha adelante
		stroke(h1, 70, 50);
		line(-10+pata_der+20, 0+40, 0-pata_izk+50, 20);
		stroke(h1, 70, 70);
		line( 0-pata_izk+50, 20 , 0, 0);
		// Pies
		fill(h1+10, s1+10, b1+40);
		ellipse(0-pata_izk+20, 0-40, 12, 12);
		ellipse(0+pata_izk+20, 0-40, 12, 12);
		ellipse(10-pata_der+20, 0+40, 12, 12);
		ellipse(-10+pata_der+20, 0+40, 12, 12);
	}
	stroke(h1, 70, 20);
	
}


function dibujarCuerpo(forma, distBase , h1 , s1 , b1 ){
	distBase = 25;
	fill( h1 , s1+20, b1-30);
	if(forma==0){
		beginShape();    				 //adelante
			vertex(distBase, 0);     //arriba
			vertex(5, -distBase);    //atras
			vertex(-distBase, -14);
			vertex(-distBase, 14);   //abajo
			vertex(5, distBase);     //adelante
		endShape(CLOSE);

		fill( h1, s1+10, b1+40);
		beginShape();
			vertex(16, 0);//adelante
			vertex(3, -16);//arriba
			vertex(-16, -10);//atras
			vertex(-16, 10); //atras
			vertex(3, 16);//abajo
		endShape(CLOSE);

	}else if(forma == 1){		
		ellipse(0, 0, 50, 50);
		fill( h1, s1+10, b1+40);
		ellipse(20, 0, 25, 25);
		ellipse(0, 0, 25, 25);
		ellipse(-20, 0, 25, 25);
	}
	else if(forma == 2){
		rectMode(CENTER);
		angleMode(DEGREES);
		push();
		rotate(45);
		ellipse(10, -10, 20, 20);
		ellipse(0, 0, 30, 30);			
		ellipse(-15, 15, 40, 40);
		pop();
	
	}else if(forma == 3){
		rectMode(CENTER);
		push();
		rotate(180);
		rect(10, -10, 20, 20);
		rect(0, 0, 30, 30);			
		rect(-15, 15, 40, 40);
		pop();
	}
}

function dibujarAlas( _forma ){
	strokeWeight(1);
	stroke(60,60);
	fill(80, 80);
	
	if(_forma==1 || _forma==2){
		// Par 1
		push();
			translate(-10, -20)		
			rotate(40);
			ellipse(0, 0, 60, 20);
		pop()
		push();
			translate(-10, 20)
			rotate(-40);
			ellipse( 0, 0, 60, 20);
		pop();	
	}
	if(_forma==2 || _forma==3){
		// Par 2
		push();
			translate(-30, -20)		
			rotate(25);
			ellipse(0, 0, 60, 20);
		pop()
		push();
			translate(-30, 20)
			rotate(-25);
			ellipse( 0, 0, 60, 20);
		pop();	
	}


}


function dibujarColumna(forma, h1, s1, b1){
	if(forma == 1){
		// Bug: Columna
		fill(h1, s1, b1);
		rectMode(CENTER);
		rect(0,0,70,5);		
		// Bug: Vertebras
		fill(h1+20, s1+10, b1+40);
		ellipse(25, 0, 10, 10); //cabeza
		ellipse(6, 0, 10, 10);
		ellipse(-13, 0, 10, 10);
		ellipse(-35, 0, 10, 10); //cola
	}else if(forma==2){
		fill(h1, s1+40, b1+20);
		beginShape();		
			vertex(12-20, 0);//adelante
			vertex(3-20, -15);//arriba
			vertex(-13-20, -7);//atras
			vertex(-23-20, -0);//atras
			vertex(-13-20, 7); //atras
			vertex(3-20, 15);//abajo
		endShape(CLOSE);
	}
}


function dibujarPico( forma , h1){
	
	fill(h1,50,50);
	strokeWeight(3);
	stroke(h1,50,20);
	if(forma == 0){
		triangle(0+45, 0, 0+45, 20, 40+45, 5);
		triangle(0+45, 0, -0+45, -20, 40+45, -5);
	}else if(forma==1){
		beginShape();
			vertex(10+40, 25);//adelante						
			vertex(7+40, 0);//adelante		
			vertex(10+40, -25);//adelante			
			vertex(-0+40, 0); //atras
		endShape(CLOSE);
		beginShape();
			vertex(12+60, 15);//adelante						
			vertex(-5+60, 0);//adelante		
			vertex(12+60, -15);//adelante			
			vertex(-15+60, 0); //atras
		endShape(CLOSE);
	}else if(forma==2){	
		// otro pico
		beginShape();
			vertex(-10+40, 15);//adelante						
			vertex(5+20, 0);//adelante		
			vertex(-10+40, -15);//adelante			
			vertex(-15+40, 0); //atras
		endShape(CLOSE);
		beginShape();
			vertex(-10+50, 25);//adelante						
			vertex(10+30, 0);//adelante		
			vertex(-10+50, -25);//adelante			
			vertex(-15+50, 0); //atras
		endShape(CLOSE);
	}
}


function dibujarCabeza( forma, h1, s1, b1){
	strokeWeight(3);
	stroke(h1, 70, 20);
	
	if(forma == 0){// Bug: Cabeza
		fill(h1+10, s1+10, b1+40);
		beginShape();
			vertex(12+50, 0);//adelante
			vertex(3+50, -15);//arriba
			vertex(-13+50, -7);//atras
			vertex(-13+50, 7); //atras
			vertex(3+50, 15);//abajo
		endShape(CLOSE);
	}else if( forma == 1 ){
		fill(h1+10, s1+10, b1+40);
		ellipse(45,0, 20, 40);	
	}else if( forma == 2 ){
		fill(h1+10, s1+10, b1+40);
		ellipse(50,0, 40, 20);
	}

	if(forma == 3){
		fill(h1+10, s1+10, b1+40);
		beginShape();
			vertex(12+70, 0);//adelante
			vertex(3+50, -15);//arriba
			vertex(-13+50, -7);//atras
			vertex(-13+50, 7); //atras
			vertex(3+50, 15);//abajo
		endShape(CLOSE);
	}
	if(forma == 4){
		fill(h1+10, s1+10, b1+40);
		beginShape();
			vertex(12+70, 0);//adelante
			vertex(3+50, -15);//arriba
			vertex(-13+50, -7);//atras
			vertex(-13+50, 7); //atras
			vertex(3+50, 15);//abajo
		endShape(CLOSE);
	}

}


function dibujarOjos( forma, h1  ){	
	fill(h1, 10, 95);
	if(forma==0){		
		ellipse(50, -10, 12, 12);
		ellipse(50, 10, 12, 12);
	}else	if(forma==1){		
		ellipse(50, -8, 8, 8);
		ellipse(50, 8, 8, 8);	
		ellipse(40, -10, 8, 8);
		ellipse(40, 10, 8, 8);	
	}else	if(forma==2){		
		ellipse(55, -8, 8, 8);
		ellipse(55, 8, 8, 8);	
		ellipse(40, -10, 8, 8);
		ellipse(40, 10, 8, 8);	
		ellipse(45, 0, 8, 8);	
	}
}



class Bugs {

	//------------------------------
	constructor( x,  y) {
		this.pata_izk=20;
		this.pata_der=60;
		this.acumuladorMovDePatas = 1 ;
		this.h1 = Math.floor(map(fxrand(),0,1,0,100));
		this.s1 = 20;
		this.b1 = 60;
		this.h2 = Math.floor(map(fxrand(),0,1,0,100));
		this.s2 = 80;
		this.b2 = 40;
		this.cuerpoGrande = Math.floor(map(fxrand(),0,1,0,10));
		this.factorEscala = fxrand();
		this.factorEscalaA = map(this.factorEscala, 0, 1 , .5 , 2);
		this.factorEscalaB = map(this.factorEscala, 0, 1 , 2 , .5);

		this.forma = {
			patas: Math.floor(map(fxrand(),0,1,0,2)),
			cuerpo: Math.floor(map(fxrand(),0,1,0,3)),
			columna: Math.floor(map(fxrand(),0,1,0,3)),
			alas: Math.floor(map(fxrand(),0,1,0,3)),
			pico: Math.floor(map(fxrand(),0,1,0,3)),
			cabeza: Math.floor(map(fxrand(),0,1,0,4)),
			ojos: Math.floor(map(fxrand(),0,1,0,3)),
		};

		// Seeker
		this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = map(fxrand(),0,1,1,5);
    this.maxForce = map(fxrand(),0,1,0.1,0.6);    
    
	}

	seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    if( dist(this.pos.x, this.pos.y, target.x, target.y) < 10 && bloquearCambioDeTarget){
    		bloquearCambioDeTarget=false;
    		fruta.hayFruta=false;
    }
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    this.applyForce(force);
  }
  applyForce(force) {
    this.acc.add(force);
  }
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }



	dibujar() {

		push();
			translate(this.pos.x, this.pos.y);
			rotate(this.vel.heading());
			scale(this.factorEscalaA);

			// Mueve patas
			this.pata_izk=this.pata_izk+this.acumuladorMovDePatas;
			this.pata_der=this.pata_der-this.acumuladorMovDePatas;
			dibujarPatas( this.forma.patas, this.pata_izk, this.pata_der, this.h1, this.s1, this.b1 );
			if (this.pata_izk==50) {
				this.acumuladorMovDePatas*=(-1);
			}
			if (this.pata_izk==20) {
				this.acumuladorMovDePatas*=(-1);
			}
	  	dibujarCuerpo( this.forma.cuerpo , this.cuerpoGrande%2==0, this.h1, this.s1, this.b1 );
	  	dibujarColumna( this.forma.columna, this.h1, this.s1, this.b1 );
			dibujarAlas( this.forma.alas );
	  	dibujarPico( this.forma.pico, this.h1 );
			dibujarCabeza( this.forma.cabeza, this.h1+10, this.s1+10, this.b1+402 );
			dibujarOjos( this.forma.ojos, this.h1 );

			scale(this.factorEscalaB);
		pop();
	}


}
