setInterval(prueba, 1000);
function prueba(event) {
    var numero_vacas = aleatorio(0, vaca.CANTIDAD);
    for (var indv = 0; indv <= numero_vacas; indv++) {
        var posicion_vaca = aleatorio(0, vaca.CANTIDAD);

        if (vaca.X[posicion_vaca] < 0) {
            vaca.X[posicion_vaca] = vaca.X[posicion_vaca] + aleatorio(0, 15);
        } else if (vaca.X[posicion_vaca] > 460) {
            vaca.X[posicion_vaca] = vaca.X[posicion_vaca] + aleatorio(-15, 0);
        } else {
            vaca.X[posicion_vaca] = vaca.X[posicion_vaca] + aleatorio(-15, 15);
        }

        if (vaca.Y[posicion_vaca] < 0) {
            vaca.Y[posicion_vaca] = vaca.Y[posicion_vaca] + aleatorio(0, 15);
        } else if (vaca.Y[posicion_vaca] > 460) {
            vaca.Y[posicion_vaca] = vaca.Y[posicion_vaca] + aleatorio(-15, 0);
        } else {
            vaca.Y[posicion_vaca] = vaca.Y[posicion_vaca] + aleatorio(-15, 15);
        }
    }

    var numero_pollos = aleatorio(0, pollo.CANTIDAD);
    for (var indp = 0; indp <= numero_pollos; indp++) {
        var posicion_pollo = aleatorio(0, pollo.CANTIDAD);
        if (pollo.X[posicion_pollo] < 0) {
            pollo.X[posicion_pollo] = pollo.X[posicion_pollo] + aleatorio(0, 15);
        } else if (pollo.X[posicion_pollo] > 460) {
            pollo.X[posicion_pollo] = pollo.X[posicion_pollo] + aleatorio(-15, 0);
        } else {
            pollo.X[posicion_pollo] = pollo.X[posicion_pollo] + aleatorio(-15, 15);
        }

        if (pollo.Y[posicion_pollo] < 0) {
            pollo.Y[posicion_pollo] = pollo.Y[posicion_pollo] + aleatorio(0, 15);
        } else if (pollo.Y[posicion_pollo] > 460) {
            pollo.Y[posicion_pollo] = pollo.Y[posicion_pollo] + aleatorio(-15, 0);
        } else {
            pollo.Y[posicion_pollo] = pollo.Y[posicion_pollo] + aleatorio(-15, 15);
        }
    }
    dibujar();
}

function dibujar() {
    papel.drawImage(fondo.imagen, 0, 0);

    papel.drawImage(cerdo.imagen, cerdo.X, cerdo.Y);

    for (var v = 0; v < vaca.CANTIDAD; v++) {
        papel.drawImage(vaca.imagen, vaca.X[v], vaca.Y[v]);
    }

    for (var p = 0; p < pollo.CANTIDAD; p++) {
        papel.drawImage(pollo.imagen, pollo.X[p], pollo.Y[p]);
    }
}
