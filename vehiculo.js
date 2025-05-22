"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var conductor_1 = require("./conductor");
var Vehiculo = /** @class */ (function () {
    function Vehiculo(placa, capacidad) {
        this.conductor = [];
        this.placa = placa;
        this.capacidad = capacidad;
    }
    Vehiculo.prototype.transportar = function () {
        var transporte = new Vehiculo("LOO-9694", 4);
        this.conductor.push(new conductor_1.Conductor(9, "Femenino", 175456883, transporte));
    };
    Vehiculo.prototype.Mostrarinfo = function () {
        return "INFORMACION DEL VEHICULO\n        Placa del vehiculo: ".concat(this.placa, "\n        Capacidad del vehiculo: ").concat(this.capacidad, " asientos");
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
