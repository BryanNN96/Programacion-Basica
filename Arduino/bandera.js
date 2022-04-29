var cinco=require("johnny-five");
var circuito=new cinco.Board();
var bombillo, motorcito, celda;

circuito.on("ready", prender);

function prender()
{
  var configuracion={pin:"A0", freq:50}
  celda=new cinco.Sensor(configuracion);

  bombillo=new cinco.LED(13);
  bombillo.on();

  motorcito=new cinco.Servo(9);
  motorcito.to(90);
  ondear();

}

function ondear()
{
  console.log("Luz"+celda.value);
  setTimeout(ondear, 1000);
}
