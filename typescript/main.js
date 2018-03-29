"use strict";
exports.__esModule = true;
var pokemon_1 = require("./pokemon");
var domwriter_1 = require("./domwriter");
// Loader
window.addEventListener('load', function () {
    var pikachu;
    pikachu = new pokemon_1.Pokemon("Pikachu", {
        "pv": 500,
        "attack": 50,
        "shielding": 50
    });
    domwriter_1.System.println(pikachu.getName());
    pikachu.hurtsItSelf();
});
