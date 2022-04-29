var jf=require("johnny-five")
var circuito=new jf.Board();

circuito.on("ready", prender);

function prender()
{
  var led=new jf.Led(13);
  var rojo=new jf.Led(9);
  led.blink(200);
  rojo.blink(600);
  console.log("Se hace hadware");
}
