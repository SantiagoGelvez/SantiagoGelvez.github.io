var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39,
    POSITIVE: 107,
    NEGATIVE: 109
};

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var cuadro2 = document.getElementById("dibujo_con_mouse");
var papel = cuadrito.getContext("2d");
var papel2 = cuadro2.getContext("2d");

cuadro2.addEventListener("mousemove", mueveMouse);

var x = 150;
var y = 150;
var grueso = 3;
var click;
var click_x;
var click_y;
var anterior_click_x;
var anterior_click_y;

dibujarLinea("red", 3, 149, 149, 151, 151, papel);

document.addEventListener("keydown", prueba);

function prueba(ev){
    console.log(ev);
}

function mueveMouse(evento2){
    click = evento2.buttons;
    click_x = evento2.offsetX;
    click_y = evento2.offsetY;
    if(click == 1){
        dibujarLinea("red", grueso, anterior_click_x, anterior_click_y, click_x, click_y, papel2);
    }
    anterior_click_x = click_x;
    anterior_click_y = click_y;
}

function dibujarTeclado(evento){
    var colorcito = "blue";
    var movimiento = 1;
    switch(evento.keyCode){

        case teclas.DOWN:
            dibujarLinea(colorcito, grueso, x, y, x, y+movimiento, papel);
            y = y+movimiento;
            break;
        
        case teclas.UP:
            dibujarLinea(colorcito, grueso, x, y, x, y-movimiento, papel);
            y = y-movimiento;
            break;
        
        case teclas.LEFT:
            dibujarLinea(colorcito, grueso, x, y, x-movimiento, y, papel);
            x = x-movimiento;
            break;
    
        case teclas.RIGTH:
            dibujarLinea(colorcito, grueso, x, y, x+movimiento, y, papel);
            x = x+movimiento;
            break;

        case teclas.POSITIVE:
            if(grueso >= 20){
                grueso=20;
            }
            else{
                grueso++;
            }
            break;
        
        case teclas.NEGATIVE:
            if(grueso<0){
                grueso=1;
            }
            else{
                grueso--;
            }

        default:
            console.log("otra tecla")
            break;
    }
}

function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

