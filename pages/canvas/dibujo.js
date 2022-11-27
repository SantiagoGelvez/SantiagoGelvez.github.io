//getElementById es un metodo del documento que trae un elemento a traves del id HTML
var texto = document.getElementById("texto_lineas");//Se obtiene el input text con la etiqueta con id texto_lineas
var boton = document.getElementById("botoncito");//Se obtiene el input button mediente la etiqueta con id botoncito
var d = document.getElementById("dibujito");//Se obtiene la etiqueta canvas mediante el id "dibujito"

boton.addEventListener("click", dibujoPorClick);

//getContext es un metodo del canvas que viene de la variable d
var lienzo = d.getContext("2d");//Esto se hace para que nos permita dibujar en 2d sobre el canvas
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();//Arrancar un trazo 
    lienzo.strokeStyle = color;//Variable (Propiedad) para el color del lapiz
    lienzo.moveTo(xinicial, yinicial);//Punto inicial de la linea
    lienzo.lineTo(xfinal, yfinal);//Define el trazo de una linea hasta las coordenadas indicadas en los parametroa
    lienzo.stroke();//Se dibuja como tal la linea, dadas las coordenadas establecidas.
    lienzo.closePath();//Cierra el trazo (Levanta el lapiz)
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l;
    var yi, xf;
    var colorcito1 = "#F88";
    var colorcito2 = "#8F8";
    
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito1, 0, yi, xf, 300);
        dibujarLinea(colorcito2, 300, 300-yi, 300-xf, 0);
        //console.log("linea "+l);
    }

    dibujarLinea(colorcito1, 1, 1, 1, 300);//Se invoca a la funcion para hacer el trazo
    dibujarLinea(colorcito1, 1, 299, 299, 299);
    dibujarLinea(colorcito2, 1, 1, 300, 1);
    dibujarLinea(colorcito2, 299, 1, 299, 299);
}