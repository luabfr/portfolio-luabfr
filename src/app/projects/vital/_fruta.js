function dibujarFruta(){
    push();
    translate(fruta.x,fruta.y);
    rotate(fruta.rotacion);
    noStroke();
    
    fill(100,70,70,80);
    ellipse(0-5, 0-5, (fruta.tam*1.15)+5,fruta.tam*1.1+5);
    fill(90,70,70,80);
    ellipse(0, 0, fruta.tam+5,fruta.tam+5);    
    
    fill(10,70,90,90);
    ellipse(0-5, 0-5, fruta.tam*1.15,fruta.tam*1.1);
    fill(90,70,90,90);
    ellipse(0, 0, fruta.tam,fruta.tam);    
    
    ellipseMode(CORNER);   
    fill(20,70,80,100);
    ellipse(0, 0, 20,10);
    ellipseMode(CENTER);
    pop();

}