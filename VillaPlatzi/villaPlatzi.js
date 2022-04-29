var vp=document.getElementById("villaPlatzi");
var paper=vp.getContext("2d");

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


var cantidad=aleatorio(1,20)

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

  console.log(cantidad);
  if (vaca.cargaOk) {
    for (var i = 0; i <cantidad; i++) {
      var x=aleatorio(0,5);
      var y=aleatorio(0,5);
      var x=x*70;
      var y=y*70;
      paper.drawImage(vaca.objeto,x,y);
    }
  }
  if (cerdo.cargaOk) {
    for (var i = 0; i <cantidad; i++) {
      var x=aleatorio(0,5);
      var y=aleatorio(0,5);
      var x=x*50
      var y=y*50;
      paper.drawImage(cerdo.objeto,x,y);
    }
  }
  if (pollo.cargaOk) {
    for (var i = 0; i <cantidad; i++) {
      var x=aleatorio(0,5);
      var y=aleatorio(0,5);
      var x=x*90;
      var y=y*90;
      paper.drawImage(pollo.objeto,x,y);
    }
  }
}


function aleatorio(min,max) {
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
