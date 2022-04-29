var express=require("express");
var app=express();

app.get("/", inicio);
app.get("/cursos", cursos);
function inicio(peticion, resultado){
  resultado.send("Hola familia este es mi primer servidor envienme un whatsapp si pueden ver la pagina");
}
function cursos(peticion, resultado){
  resultado.send("Estos son los cursos");
}

app.listen(8989);
