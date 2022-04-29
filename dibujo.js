var texto = document.getElementById("texto_lineas");
var buton = document.getElementById("boton_lineas");
buton.addEventListener("click",dibujoporclick);

var d=document.getElementById("dibujo1");
var ancho= d.width;
var lienzo=d.getContext("2d");


function dibujarlinea(color, x_inicial, x_final, y_inicial, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick()
{

  var lineas= parseInt(texto.value);
  var l=0
  var yi, xf, yf, xi;
  var colorciclo= "black"
  var espacio=ancho/lineas;

  while (l<lineas)
   {
     yi=espacio*l;
     xf=espacio*(l+1);
     yf=espacio*(l+1);
     xi=espacio*l;
    dibujarlinea(colorciclo,0,xf,yi,300);
    dibujarlinea(colorciclo,xi,300,0,yf);
    l++;
  }
  for (var l = 0; l < lineas; l++)
   {
     yi=espacio*l;
     xf=300-(espacio*(l+1));
     yf=300-(espacio*(l+1));
     xi=espacio*l;
    dibujarlinea(colorciclo,xi,300,300,yf)
    dibujarlinea(colorciclo,0,xf,yi,0)
  }

  dibujarlinea(colorciclo,1,1,1,300);
  dibujarlinea(colorciclo,0,299,299,299);
  dibujarlinea(colorciclo,300,1,1,1);
  dibujarlinea(colorciclo,299,299,299,0);

}
