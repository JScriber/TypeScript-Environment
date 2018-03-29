"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, stats) {
        this.name = name;
        // Setting up the PV
        this.totalHP = stats.pv;
        this.actualHP = stats.pv;
        // Setting up the other stats
        this.attack = stats.attack;
        this.shielding = stats.shielding;
    }
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.isStillAlive = function () {
        if (this.actualHP == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    // Inside functions
    Pokemon.prototype.getDamages = function (damages) {
        this.actualHP -= damages;
        if (this.actualHP < 0) {
            this.actualHP = 0;
        }
    };
    Pokemon.prototype.hurtsItSelf = function () {
        this.getDamages(50);
        if (this.isStillAlive()) {
            console.log(this.name + " is still alive");
        }
        else {
            console.log(this.name + " is dead");
        }
    };
    // Class method
    Pokemon.fighting = function (attacker, victime) {
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
