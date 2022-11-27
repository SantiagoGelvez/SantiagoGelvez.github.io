var tecla = {
    PRESS_LEFT: false,
    PRESS_UP: false,
    PRESS_RIGTH: false,
    PRESS_DOWN: false,
    LEFT: 37,
    UP: 38,
    RIGTH: 39,
    DOWN: 40,
};

document.addEventListener("keydown", aprietaTecla);
document.addEventListener("keyup", sueltaTecla);

function aprietaTecla(event) {
    switch (event.keyCode) {
        case tecla.UP:
            tecla.PRESS_UP = true;
            break;

        case tecla.DOWN:
            tecla.PRESS_DOWN = true;
            break;

        case tecla.LEFT:
            tecla.PRESS_LEFT = true;
            break;

        case tecla.RIGTH:
            tecla.PRESS_RIGTH = true;
            break;
    }
    correCerdo();
}

function sueltaTecla(event) {
    switch (event.keyCode) {
        case tecla.UP:
            tecla.PRESS_UP = false;
            break;

        case tecla.DOWN:
            tecla.PRESS_DOWN = false;
            break;

        case tecla.LEFT:
            tecla.PRESS_LEFT = false;
            break;

        case tecla.RIGTH:
            tecla.PRESS_RIGTH = false;
            break;
    }
    correCerdo();
}

function correCerdo(event) { //Cerdo en casa en X430, Y460
    let moveY = cerdo.Y;
    let moveX = cerdo.X;
    console.log("🚀 ~ file: configteclas.js ~ line 72 ~ cerdo.Y", cerdo)
    if (tecla.PRESS_UP) {
        moveY = moveY - 10;
        if (moveY > 0) {
            cerdo.Y = moveY;
        } else {
            cerdo.Y = 0;
        }
    }
    if (tecla.PRESS_DOWN) {
        moveY = moveY + 10;
        if (moveY <= 470) {
            cerdo.Y = moveY;
        } else {
            cerdo.Y = 470;
        }
    }
    if (tecla.PRESS_LEFT) {
        moveX = moveX - 10;
        if (moveX > 0) {
            cerdo.X = moveX;
        } else {
            cerdo.X = 0;
        }
    }
    if (tecla.PRESS_RIGTH) {
        moveX = moveX + 10;
        if (moveX <= 450) {
            cerdo.X = moveX;
        } else {
            cerdo.X = 450;
        }
    }
    dibujar();
}
