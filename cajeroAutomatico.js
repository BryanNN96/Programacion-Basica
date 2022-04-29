class Billetes {
  constructor(v,c) {
    this.valor=v;
    this.cantidad=c;
  }
}

function entregarDinero(){
  var t =document.getElementById("dinero");
  dinero=parseInt(t.value);
  for(var bi of caja){
    if (dinero>0) {
      div=Math.floor(dinero/bi.valor);
      if (div>bi.cantidad) {
        papeles=bi.cantidad;
      }
      else {
        papeles=div;
      }
      entregado.push(new Billetes(bi.valor,papeles));
      dinero=dinero-(bi.valor*papeles);
    }
  }
  if (dinero>0) {
    resultado.innerHTML="Dinero insuficiente en el Cajero";
  }
  else {
    for(var e of entregado){
      if (e.cantidad>0) {
        resultado.innerHTML+=e.cantidad+" Billetes de $"+e.valor+"<br>";
      }
    }
  }
}

var caja =[];
var entregado =[];

caja.push(new Billetes(50,20));
caja.push(new Billetes(20,30));
caja.push(new Billetes(10,10));

var dinero;
var div=0;
var papeles=0;


var resultado=document.getElementById("resultado");
var b=document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
