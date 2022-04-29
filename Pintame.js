var cuadrito=document.getElementById("espacioPintame");
var lienzo= cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", inicioLinea);
cuadrito.addEventListener("mouseup", finLinea);
cuadrito.addEventListener("mousemove", movimientoLinea);
var clientRect = cuadrito.getBoundingClientRect();
var ancho = cuadrito.width;
var alto = cuadrito.height;
var xi = yi = x = y = null;
var estadoMouse;
var colorPintame="black";


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=1;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function inicioLinea(evento){

  estadoMouse=1;
  xi= Math.round(evento.clientX - clientRect.left);
  yi= Math.round(evento.clientY - clientRect.top);
  console.log(evento);

}
function finLinea(evento){

  estadoMouse=0;
}
function movimientoLinea(evento){
  x= Math.round(evento.clientX - clientRect.left);
  y= Math.round(evento.clientY - clientRect.top);
  if (estadoMouse==1) {
    console.log("hasta aqui bien");
    dibujarLinea(colorPintame, xi, yi, x, y, lienzo);
    console.log(evento);
  }
  xi=x;
  yi=y;
}
