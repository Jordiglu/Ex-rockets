"use strict";
class Rocket {
    constructor(propulsor, id) {
        this.propulsor = [];
        this.maxPropulsor = [];
        for (let i = 0; i < propulsor.length; i++) {
            this.propulsor.push(0);
            this.maxPropulsor.push(propulsor[i]);
        }
        this.id = id;
    }
    toString() {
        let propulsors = "";
        for (let i = 0; i < this.propulsor.length; i++) {
            propulsors += this.propulsor[i] + " ";
        }
        return this.id + ": " + propulsors;
    }
    acelerar() {
        for (let i = 0; i < this.propulsor.length; i++) {
            if (this.propulsor[i] < this.maxPropulsor[i]) {
                this.propulsor[i] += 10;
            }
        }
    }
    frenar() {
        let propulsors = 0;
        for (let i = 0; i < this.propulsor.length; i++) {
            if (this.propulsor[i] > 0) {
                this.propulsor[i] -= 10;
            }
        }
    }
    sumarPotencias() {
        let propulsors = 0;
        for (let i = 0; i < this.propulsor.length; i++) {
            propulsors += this.propulsor[i];
        }
        return propulsors;
    }
}
