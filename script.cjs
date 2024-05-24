const robot = require('robotjs');

console.log("Bem-vindo ao meu programa!")
console.log("Em 10 segundos, o aplicativo irá iniciar");
console.log("Créditos: @chenrique_dev");
console.log('Obrigado por usar meu programa! 😊👍');
setTimeout(() => {
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
    selecionarPosEclicar(906, 375)

    robot.keyTap("r", ['command'])
    robot.typeString("prefetch")
    robot.keyTap("enter")
    robot.keyTap('a', ['control']);

    setTimeout(() => {
        robot.keyTap("r", ['command']);
        robot.typeString("explorer.exe shell:RecycleBinFolder")
        robot.keyTap("enter")
        setTimeout(() => {
            robot.keyTap('a', ['control']);
            robot.keyTap("delete")
            robot.keyTap("enter");

        }, 3000)
    }, 5000)
}, 10000);

