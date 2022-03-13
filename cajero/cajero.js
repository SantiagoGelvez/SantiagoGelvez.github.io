/*Consruccion de la clase billete*/
class Billete {
    constructor(n, v, c){
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;
        this.imagen = imagenes[this.nombre];
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        console.log(m, papeles);
    }
}
//**Imagenes de los billetes 
var imagenes = [];
imagenes["500"]="billete500.jpg";
imagenes["100"]="billete100.jpg";
imagenes["50"]="billete50.jpg";
imagenes["20"]="billete20.jpg";
imagenes["10"]="billete10.jpg";
imagenes["5"]="billete5.jpg";
imagenes["1"]="billete1.jpg";

//****Asignacion de lo elementos HTML a variables en JS
var b = document.getElementById("extraer"); //En b se guarda el boton extraer
var resultado = document.getElementById("resultado");
var restante = document.getElementById("restante");

var caja = [];  /*Arreglo de los billetes que tengo en la caja
El arreglo es de la forma nombre:valor*/
var entregado = []; /*Arreglo de los billetes retirados de la caja*/
var div = 0;
var papeles = 0;
var dinero; //Dinero a retirar


//Inicialización con la cantidad de billetes disponibles en la caja
caja.push( new Billete("500", 500, 20) );
caja.push( new Billete("100", 100, 20) );
caja.push( new Billete("50", 50, 30) );
caja.push( new Billete("20", 20, 50) );
caja.push( new Billete("10", 10, 40) );
caja.push( new Billete("5", 5, 40) );
caja.push( new Billete("1", 1, 40) );

/** Muestra la cantidad de billetes que hay en la caja*/
for(var res of caja){
    restante.innerHTML += res.cantidad + " billetes de $" + res.valor + "<br/>";
}

b.addEventListener("click", entregarDinero); // Al hacer clic en el boton se ejecuta la funcion 'entregarDinero'

function entregarDinero(){
    t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    entregado = [];//**Reinicia la variable para luego determinar el dinero a entregar */
    restante.innerHTML = "";

    for(var bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);  /*División para determinar
            cuántos billetes se necesitan para cubrir el dinero a retirar*/
            if(div > bi.cantidad){
                papeles = bi.cantidad; //No tengo la cantidad
            }
            else{
                papeles = div; //Si tengo la cantidad
            }
            entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0){
        resultado.innerHTML = "No tengo dinero";
        entregado = [];
    }
    else{
        var i=0;
        for(var e of entregado){ //Recorre el array 'entregado' y toma el valor del dato
            if(e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br/>";
                for(var m=1; m<=e.cantidad; m++){
                    resultado.innerHTML += "<img src='"+e.imagen+"' width=90px/>";
                }
                resultado.innerHTML +="<br/>"
            }
            caja[i].cantidad-=e.cantidad;
            i++;
        }
    }
    for(var res of caja){
        restante.innerHTML += res.cantidad + " billetes de $" + res.valor + "<br/>";
    }
    resultado.innerHTML +="<hr/>";
    console.log(entregado, caja);
}


