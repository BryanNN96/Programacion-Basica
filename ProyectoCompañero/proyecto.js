var color = document.getElementById("colorcito");//input color
var grosor = document.getElementById("numerito");//input number
var posicion = document.getElementById("coordenadas");//donde escribir las coordenadas
var dibujito = document.getElementById("palitoDibujito");//canvas
var lienzo = dibujito.getContext("2d");
var clientRect = dibujito.getBoundingClientRect();//obtener posicion de canvas
var ancho = dibujito.width;//ancho del canvas
var alto = dibujito.height;//altura del canvas
var xi = yi = x = y = null;//coordenadas
var paso = 10;
var presionado = false;

dibujito.addEventListener("pointermove", dibujarMouse);
dibujito.addEventListener("pointerdown", clickMouse);
dibujito.addEventListener("pointerup", soltarClickev);
dibujito.addEventListener("pointerout", soltarClickev);

function clickMouse(ev) {
    presionado = true;
    xi = Math.round(ev.clientX - clientRect.left);
    yi = Math.round(ev.clientY - clientRect.top);
}
function soltarClickev(ev) {
    presionado = false;
}

function dibujarMouse(ev) {
    x = Math.round(ev.clientX - clientRect.left);
    y = Math.round(ev.clientY - clientRect.top);
    if ((xi != x || yi != y) && presionado && (xi !== null && yi !== null)) {
        dibujar(lienzo, color.value, grosor.value, xi, yi, x, y);
    }
    posicion.innerHTML = x + ',' + y;
    xi = x;
    yi = y
}

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(ev) {
    xi = x;
    yi = y;
    switch (ev.keyCode) {
        case teclas.LEFT:
            x -= paso;
            break;
        case teclas.UP:
            y -= paso;
            break;
        case teclas.RIGHT:
            x += paso;
            break;
        case teclas.DOWN:
            y += paso;
            break;
        default:
            console.log('Presionaste otra tecla');
            break;
    }
    if (!(x > ancho || x < 0 || y > alto || y < 0)) {
        dibujar(lienzo, color.value, grosor.value, xi, yi, x, y);
        posicion.innerHTML = x + ',' + y;
    } else {
        x = xi;
        y = yi;
        console.log("No te salgas del limite");
    }
}

function dibujar(canvas, color, grosor, x_inicio, y_inicio, x_fin, y_fin) {
    //console.log(x_inicio + ":" + y_inicio + " - " + x_fin + ":" + y_fin)
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.lineWidth = grosor;
    canvas.moveTo(x_inicio, y_inicio);
    canvas.lineTo(x_fin, y_fin);
    canvas.stroke();
    canvas.closePath();
}
