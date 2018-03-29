"use strict";
exports.__esModule = true;
var System = /** @class */ (function () {
    function System() {
    }
    System.println = function (message) {
        var door = document.getElementById('output');
        door.innerHTML += message + "<br>";
    };
    System.clear = function () {
        var door = document.getElementById('output');
        door.innerHTML = "";
    };
    return System;
}());
exports.System = System;
