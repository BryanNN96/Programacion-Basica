var imagenes=[];
imagenes["PokeVaca"]="vaca.png";
imagenes["PokePollo"]="pollo.png";
imagenes["PokeCerdo"]="cerdo.png";

var coleccion=[];
coleccion.push(new Pokeanimal("PokeVaca",100,30));
coleccion.push(new Pokeanimal("PokePollo",80,50));
coleccion.push(new Pokeanimal("PokeCerdo",120,40));

for (var animalitos of coleccion) {
  animalitos.mostrar();
}
for (var x in coleccion[0])  {
    console.log(x);
  }
