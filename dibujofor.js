var d=document.getElementById("dibujo2");
var lienzo=d.getContext("2d");
var lineas=30;
var l=0
var yi, xf;
var colorciclo

for (var l = 0; l < lineas; l++)
 {
   yi=10*l;
   xf=10*(l+1)
  dibujarlinea(colorciclo,0,xf,yi,300);
  console.log("Linea" + l);

}
for (var l = 0; l < lineas; l++)
 {
   yi=10*l;
   xf=300-(10*(l+1));
   yf=300-(10*(l+1));
   xi=10*l;
  dibujarlinea(colorciclo,xi,300,300,yf)
  dibujarlinea(colorciclo,0,xf,yi,0)
}

dibujarlinea(colorciclo,1,1,1,300);
dibujarlinea(colorciclo,0,299,299,299);


function dibujarlinea(color, x_inicial, x_final, y_inicial, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}
