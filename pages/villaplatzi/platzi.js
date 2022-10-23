var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    URL: "./assets/img/tile.png",
    CARGAOK: false,
};

var vaca = {
    URL: "./assets/img/vaca2.png",
    CARGAOK: false,
    CANTIDAD: 0,
    X: [],
    Y: [],
};

var cerdo = {
    URL: "./assets/img/cerdo2.png",
    CARGAOK: false,
    X: aleatorio(0, 2) * 20,
    Y: aleatorio(0, 2) * 20,
};

var pollo = {
    URL: "./assets/img/pollo2.png",
    CARGAOK: false,
    CANTIDAD: 0,
    X: [],
    Y: [],
};

var died = false;

fondo.imagen = new Image();
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.URL;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.URL;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.URL;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
    fondo.CARGAOK = true;
    primerCarga();
}

function cargarVacas() {
    vaca.CARGAOK = true;
    primerCarga();
}

function cargarCerdos() {
    cerdo.CARGAOK = true;
    primerCarga();
}

function cargarPollos() {
    pollo.CARGAOK = true;
    primerCarga();
}

function primerCarga() {
    if (fondo.CARGAOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (cerdo.CARGAOK) {
        papel.drawImage(cerdo.imagen, cerdo.X, cerdo.Y);
    }

    if (vaca.CARGAOK) {
        vaca.CANTIDAD = aleatorio(8, 12);
        for (var v = 0; v < vaca.CANTIDAD; v++) {
            vaca.X[v] = aleatorio(2, 14) * 30;
            vaca.Y[v] = aleatorio(2, 14) * 30;
            papel.drawImage(vaca.imagen, vaca.X[v], vaca.Y[v]);
        }
    }

    if (pollo.CARGAOK) {
        pollo.CANTIDAD = aleatorio(8, 12);
        for (var p = 0; p < pollo.CANTIDAD; p++) {
            pollo.X[p] = aleatorio(2, 11) * 40;
            pollo.Y[p] = aleatorio(2, 11) * 40;
            papel.drawImage(pollo.imagen, pollo.X[p], pollo.Y[p]);
        }
    }
}

function aleatorio(mini, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}
