var teclas= {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito=document.getElementById("espacio");
var papel= cuadrito.getContext("2d");
var x=150;
var y=150;

dibujarLinea("black", 149, 149, 151, 151, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=3;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
console.log("si funciona");
function dibujarTeclado(evento)
{
  var colorFlechas= "blue"
  var movimiento=1;
  switch (evento.keyCode) {
    case teclas.UP:
    dibujarLinea(colorFlechas, x, y, x, y-movimiento, papel);
    y=y-movimiento;
      console.log("vamo' pa arriba");
      console.log(evento);
      break;
    case teclas.DOWN:
      console.log("vamo' pa abajo");
      dibujarLinea(colorFlechas, x, y, x, y+movimiento,papel);
      y=y+movimiento;
      break;
    case teclas.RIGHT:
      console.log("vamo' pa la derecha");
      dibujarLinea(colorFlechas, x, y, x+movimiento, y, papel);
      x=x+movimiento;
      break;
    case teclas.LEFT:
      console.log("vamo' pa la izquierda")
      dibujarLinea(colorFlechas, x, y, x-movimiento, y, papel);
      x=x-movimiento;
      break;
    default:
    console.log(evento);

  }
}
