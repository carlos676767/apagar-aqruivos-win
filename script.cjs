const robot = require('robotjs');

function selecionarPosEclicar(valor1, valo2) {
    robot.moveMouse(valor1, valo2)
    robot.mouseClick()
}

function digitarTemp() {
    robot.typeString("%temp%")
    robot.keyTap("enter")
    robot.keyTap('a', ['control']);
    robot.keyTap("delete")
}

const esperar = () => {

}


selecionarPosEclicar(1569, 17);
digitarTemp()
esperar();
selecionarPosEclicar(577, 376)
selecionarPosEclicar(822, 411)