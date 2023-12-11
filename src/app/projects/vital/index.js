//"oo5r4FV6kwB861Ajh3VprngeMNFXYaHyRH1Vu3xTrzfpeMeeoUn"
//"ooUhEokChU1zsRJxdeMwYiwoQHB6zHNmu7GrPUBQLScp2ehpNrn"
//"oomPoRzvueq2RMRntmNnZbB2HasNsFaazvjPK6hSwLrATXqjzRX"
//"oo9eRRi56SZFYGWK3SwV5H5MEV55S5enGK5spdt4uzU5ccLgY7i"
//"ooZzZ3qf7o41NdYc7EfFxk55imNHXAoS5YMdLcvH9qoq62LoqQb"
//"ooh6vcBjC2GovyUuJn5H16Stte1RmbjLGiKGbeoXYxVYk2D9uaS"
//"oo74vEzuhqzQvr9HoJmXYttKFEz3fZjN1ugX3J7JqyhW5Wu9rez"
//oons5gVU8VAGS8eVzuWq9JD5dc9ZoSE426cMnf1rr6mewAuPyu8


// Globales
let width;
let height;
let tonoNatura;
let brilloNatura;
let saturacionNatura;
let midnite; 
let arbustosRareza; 
let mosquitasRareza;
let brumaRareza;
let bloquearCambioDeTarget = false;
let fruta = {}
fruta.hayFruta = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  width = windowWidth;
  height = windowHeight;
  colorMode(HSB,100);  
  frameRate(60);

  // General
  brumaRareza = fxrand() > 0.4  ? true : false;
  arbustosRareza = fxrand() > 0.5  ? true : false;
  mosquitasRareza = fxrand() > 0.6  ? true : false;
  midnite =   fxrand() > 0.7  ? true : false;

  
  tonoNatura = Math.floor(map(fxrand(),0,1,0,80));
  brilloNatura = midnite ? 18 : 98;
  saturacionNatura = midnite ? 50 : 3;

  fruta.rotacion = Math.floor(map(fxrand(),0,1,0,360));
  fruta.tam = Math.floor(map(fxrand(),0,1,10,40));

  
  let tonoContraste = tonoNatura + 30;
  tonoContraste > 100 ? tonoContraste -= 100 : "";  
  
  mohoSetup();
  floresSetup();
  bugsSetup();
  alguacilSetup();
  if(arbustosRareza){   
    arbustoSetup(); 
  }
  if(mosquitasRareza){   
    mosquitasSetup(); 
  }  
  burbujasSetup();

  window.$fxhashFeatures = {    
      "Bugs": featBugs(cantBugsIniciales),
      "Flies": featMosquitas(mosquitasRareza),
      "Flies Amount": featMosquitasAmount(cantMosquitasIniciales),
      "Time Life": featMidnite(midnite),
      "Mist": featBruma(brumaRareza),
      "Shrubbery": featArbustos(arbustosRareza),      
      "Mood": featTonoNatura(tonoNatura),  
  }




}



function draw(){
  background(tonoNatura, saturacionNatura, brilloNatura);
  
  mohoDraw();
  floresDraw();
  if(brumaRareza){    
    background(tonoNatura, 3, brilloNatura,20);
  }
  if(fruta.hayFruta){
    dibujarFruta();
  }
  bichosDraw();
  if(brumaRareza){    
    background(tonoNatura, 3, brilloNatura,20);
  }
  burbujasDibujar(); 
  alguacilDraw();
  if(arbustosRareza){ 
    arbustoDraw();
  }
  if(mosquitasRareza){   
    mosquitasDraw();  
  }
  
  
}




function mousePressed(){ 
  fruta.hayFruta = true;
  fruta.rotacion = int(random(360));
  fruta.tam = int(random(10,40));
  fruta.x = alguacil.pos.x;
  fruta.y = alguacil.pos.y;
  // Bugs
  for (i=0;i<cantBugsIniciales; i++){    
    targetBicho[i].x = alguacil.pos.x;
    targetBicho[i].y = alguacil.pos.y;
  }
  bloquearCambioDeTarget = true;
  colorOjosAlguacil = true;
}




function mouseMoved() {
  xBurbujas[contadorBurbujas] = mouseX ;
  yBurbujas[contadorBurbujas] = mouseY ;
  contadorBurbujas++;
  if (contadorBurbujas>=totalBurbujas) {
    contadorBurbujas=0;
  }
}



