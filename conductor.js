"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conductor = void 0;
var pasajero_1 = require("./pasajero");
var vehiculo_1 = require("./vehiculo");
var Conductor = /** @class */ (function () {
    function Conductor(experiencia, genero, licencia, vehiculo) {
        this.pasajero = [];
        this.experiencia = experiencia;
        this.genero = genero;
        this.licencia = licencia;
        this.vehiculo = vehiculo;
    }
    Conductor.prototype.trasladar = function () {
        var transportista = new Conductor(4, "femenino", 987654321, new vehiculo_1.Vehiculo("ABC-1234", 10));
        this.pasajero.push(new pasajero_1.Pasajero("María", 9876543210, "maria@gmail.com", transportista));
    };
    Conductor.prototype.Obtenerinformacion = function () {
        return "INFORMACION DEL CONDUCTOR\n        Experiencia del conductor: ".concat(this.experiencia, "\n        Genero del conductor: ").concat(this.genero, "\n        Licencia del conductor: ").concat(this.licencia, "\n        ").concat(this.vehiculo.Mostrarinfo());
    };
    return Conductor;
}());
exports.Conductor = Conductor;
