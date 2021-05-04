

var rocket1: Rocket;
var rocket2: Rocket;


var potenciaMaxima: number = 0;
var potenciaMaxima1: number = 0;
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

function acelerar(rocket: Rocket) {
    if (rocket !== undefined) {
        rocket.acelerar();
        console.log(`potencia: ${rocket.toString()}`);
    } else {
        alert('Tienes que crear el Rocket');
    }

}

function frenar(rocket: Rocket) {
    if (rocket !== undefined) {
        rocket.frenar();
        console.log(`Potencia ${rocket.toString()}`);
    } else {
        alert('Tienes que crear el Rocket!')
    }

}
function printRocket(rocket: Rocket) {
    if (rocket !== undefined) {
        document.querySelector("#rocket")!.textContent = `${rocket.toString()}`
    } else {
        alert('Tienes que crear el Rocket!')
    }

}

function printAllRocket(rocket: Rocket) {
    document.querySelector("#rocket")!.textContent = `${rocket1.toString()}        ${rocket2.toString()} `;

}










