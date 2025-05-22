"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Viaje = void 0;
var ruta_1 = require("./ruta");
var pasajero_1 = require("./pasajero");
var vehiculo_1 = require("./vehiculo");
var conductor_1 = require("./conductor");
var Viaje = /** @class */ (function () {
    function Viaje(valor, tiempoestimado, pasajero) {
        this.ruta = [];
        this.valor = valor;
        this.tiempoestimado = tiempoestimado;
        this.pasajero = pasajero;
    }
    Viaje.prototype.asignarruta = function () {
        var trayecto = new Viaje(10, 12, new pasajero_1.Pasajero("Sofía", 98765432, "sofia@gmail.com", new conductor_1.Conductor(3, "femenino", 123456789, new vehiculo_1.Vehiculo("ABC-1234", 10))));
        this.ruta.push(new ruta_1.Ruta("Guayaquil", "Cuenca", 75, trayecto));
    };
    Viaje.prototype.mostarinformacionviaje = function () {
        return "INFORMACION DEL VIAJE\n        Valor del viaje: ".concat(this.valor, "$\n        Tiempo estimado del viaje: ").concat(this.tiempoestimado, " horas\n        ").concat(this.pasajero.mostrarinformacionpasajero());
    };
    return Viaje;
}());
exports.Viaje = Viaje;
