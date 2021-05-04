"use strict";
var rocket1;
var rocket2;
var potenciaMaxima = 0;
var potenciaMaxima1 = 0;
function createRocket1() {
    potenciaMaxima = 0;
    rocket1 = new Rocket([10, 30, 80], "2WESSDS");
    console.log(`Acabas de crear${rocket1.toString()}`);
}
function createRocket2() {
    potenciaMaxima1 = 0;
    rocket2 = new Rocket([30, 40, 50, 50, 30, 10], "LDSFJA32");
    console.log(`Acabas de crear un ROCKET!${rocket2.toString()}`);
}
function acelerar(rocket) {
    if (rocket !== undefined) {
        rocket.acelerar();
        console.log(`potencia: ${rocket.toString()}`);
    }
    else {
        alert('Tienes que crear el Rocket');
    }
}
function frenar(rocket) {
    if (rocket !== undefined) {
        rocket.frenar();
        console.log(`Potencia ${rocket.toString()}`);
    }
    else {
        alert('Tienes que crear el Rocket!');
    }
}
function printRocket(rocket) {
    if (rocket !== undefined) {
        document.querySelector("#rocket").textContent = `${rocket.toString()}`;
    }
    else {
        alert('Tienes que crear el Rocket!');
    }
}
function printAllRocket(rocket) {
    document.querySelector("#rocket").textContent = `${rocket1.toString()}        ${rocket2.toString()} `;
}
