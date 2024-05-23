const robot = require('robotjs');

function moverMouseBarra() {
    robot.moveMouse(1569, 17)
    robot.mouseClick()
}

function digitarTemp() {
    robot.typeString("%temp%")
    robot.keyTap("enter")
    robot.keyTap('a', ['control']);
}



moverMouseBarra();
digitarTemp()