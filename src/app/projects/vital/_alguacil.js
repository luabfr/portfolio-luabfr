let alguacil;
let colorOjosAlguacil = false;

function alguacilSetup(){
  alguacil = new Alguacil( Math.floor(map(fxrand(),0,1,0,width)) , Math.floor(map(fxrand(),0,1,0,height)) );
  //alguacil = new Alguacil( width/2 , height/2 );
}

function alguacilDraw(){
  targetAlguacilVector = createVector(mouseX, mouseY);
  alguacil.seek(targetAlguacilVector);
  alguacil.update();
  alguacil.dibujar();
}



function dibujarCuerpoAlguacil(vel, pos, tamAlas, colorCuerpo, forma){
  stroke(colorCuerpo+10, 70, 30); 
  strokeWeight(1);
  translate(pos.x, pos.y);
  rotate(vel.heading());
  strokeWeight(2);
  fill(colorCuerpo, 50, 100);  
  if( forma == 1 ){
    ellipse(0,0, 40,20);
  }else{
    // Cuerpo    
    beginShape();    
      vertex(23, 0);  //adelante    
      vertex(5, -15); //arriba  
      vertex(-20, 0); //atras
      vertex(5, 15);  //abajo    
    endShape(CLOSE);
  }
  
  // Cola
  fill(90, 60, 90); 
  ellipse(-22,0,10,10);
  ellipse(-22,0,5,5);
  ellipse(-32,0,10,10);
  ellipse(-32,0,5,5);

  stroke(colorCuerpo-10, 70, 50);   
  line(0,0,-20,0);
  line(0,0,5,-15);
  line(0,0,5,15);
  
  //Libelula: Ojos
  
  if(colorOjosAlguacil){    
    fill(100, 100, 100);
    if(frameCount%20==0){
      colorOjosAlguacil=!colorOjosAlguacil; 
    }
  }else{ 
    fill(80,0,100);    
  }
  ellipse(20, -10, 10, 10);
  ellipse(20, 10, 10, 10);

  // Libelula: Alas
  noStroke();
  fill(90, 1, 70, 50); 
  ellipse(0, -20, tamAlas, tamAlas);
  ellipse(0, 20, tamAlas, tamAlas);
  ellipse(-10, -10, tamAlas-10, tamAlas-10);
  ellipse(-10, 10, tamAlas-10, tamAlas-10);
 
  
}


class Alguacil{
  constructor( x ,  y ) {  
    this.contAlas = 0;
    this.tamAlas = 20;
    this.colorCuerpo = Math.floor(map(fxrand(),0,1,10,70));
    this.forma = Math.floor(map(fxrand(),0,1,0,2));

    // Seeker
    this.pos = createVector(x, y);
    this.vel = createVector(0, -2);
    this.acc = createVector(0, 0);
    this.maxSpeed = map(fxrand(),0,1,4,10); // 4 valor originales
    this.maxForce = map(fxrand(),0,1,0.1,0.3);   // 0.1 valor originales    
  }

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);    
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

  dibujar(){
    push();
      dibujarCuerpoAlguacil(this.vel, this.pos, this.tamAlas, this.colorCuerpo, this.forma);  
    pop(); 
    this.contAlas++;
    if (this.contAlas%5==0) {
      fill(130, 170, 100, 200);
      this.tamAlas=30;
    }  
    else {
      fill(190, 230, 100, 150);
      this.tamAlas=25;
    }
  }
}