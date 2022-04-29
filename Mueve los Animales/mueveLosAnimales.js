var vp=document.getElementById("mueveLosAnimales");
var paper=vp.getContext("2d");
document.addEventListener("keydown", moverAnimales);
var teclas= {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39,
  W:87,
  S:83,
  A:65,
  D:68,
};
var vx=vy=100;
var px=py=200;
var cx=cy=300;

var fondo={
  url:"tile.png",
  cargaOk:false
}
var vaca={
  url:"vaca.png",
  cargaOk:false
};
var cerdo={
  url:"cerdo.png",
  cargaOk:false
};
var pollo={
  url:"pollo.png",
  cargaOk:false
};


fondo.objeto= new Image();
fondo.objeto.src=fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto=new Image();
vaca.objeto.src=vaca.url;
vaca.objeto.addEventListener("load",cargarVaca);

cerdo.objeto=new Image();
cerdo.objeto.src=cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);

pollo.objeto=new Image();
pollo.objeto.src=pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);


function cargarFondo(){
  fondo.cargaOk=true;
  dibujar();
}
function cargarVaca(){
  vaca.cargaOk=true;
  dibujar();
}
function cargarCerdo(){
  cerdo.cargaOk=true;
  dibujar();
}
function cargarPollo(){
  pollo.cargaOk=true;
  dibujar();
}

function dibujar(){
  if (fondo.cargaOk) {
    paper.drawImage(fondo.objeto,0,0);
  }
  if (vaca.cargaOk) {
      paper.drawImage(vaca.objeto,vx,vy);
  }
  if (cerdo.cargaOk) {
      paper.drawImage(cerdo.objeto,cx,cy);
    }
  if (pollo.cargaOk) {
      paper.drawImage(pollo.objeto,px,py);
    }
}

function moverAnimales(evento){
  var movimiento=5;
  switch (evento.keyCode) {
    case teclas.UP:
      vy=vy-movimiento;
      dibujar();
      console.log("vamo' pa arriba");
      console.log(evento);
      break;
    case teclas.DOWN:
      console.log("vamo' pa abajo");
      vy=vy+movimiento;
      dibujar();
      break;
    case teclas.RIGHT:
      console.log("vamo' pa la derecha");
      vx=vx+movimiento;
      dibujar();
      break;
    case teclas.LEFT:
      console.log("vamo' pa la izquierda")
      vx=vx-movimiento;
      dibujar();
      break;
    case teclas.W:
      console.log("vamo' pa la izquierda")
      cy=cy-movimiento;
      dibujar();
      break;
    case teclas.S:
      console.log("vamo' pa la izquierda")
      cy=cy+movimiento;
      dibujar();
      break;
    case teclas.A:
      console.log("vamo' pa la izquierda")
      cx=cx-movimiento;
      dibujar();
      break;
    case teclas.D:
      console.log("vamo' pa la izquierda")
      cx=cx+movimiento;
      dibujar();
      break;
    default:
    console.log(evento);
  }
}


function aleatorio(min,max) {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
