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

const obterPos = () => {
    setTimeout(() => {
        console.log(robot.getMousePos());
    }, 5000);
}



selecionarPosEclicar(1569, 17);
digitarTemp()
selecionarPosEclicar(577, 376)
selecionarPosEclicar(822, 411)

robot.keyTap("r", ['command'])
robot.typeString("temp")
robot.keyTap("enter")
robot.keyTap('a', ['control']);
robot.keyTap("delete")
selecionarPosEclicar(577, 376)
obterPos()
selecionarPosEclicar(906, 375)
robot.keyTap("r", ['command'])
robot.typeString("prefetch")