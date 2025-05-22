"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pasajero = void 0;
var conductor_1 = require("./conductor");
var vehiculo_1 = require("./vehiculo");
var viaje_1 = require("./viaje");
var Pasajero = /** @class */ (function () {
    function Pasajero(nombre, telefono, correo, conductor) {
        this.viaje = [];
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.conductor = conductor;
    }
    Pasajero.prototype.getnombre = function () {
        return this.nombre;
    };
    Pasajero.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    Pasajero.prototype.gettelefono = function () {
        return this.telefono;
    };
    Pasajero.prototype.settelefono = function (telefono) {
        this.telefono = telefono;
    };
    Pasajero.prototype.getcorreo = function () {
        return this.correo;
    };
    Pasajero.prototype.setcorreo = function (correo) {
        this.correo = correo;
    };
    Pasajero.prototype.reservarviaje = function () {
        var viajero = new Pasajero("Lucía", 987654321, "lucia02@gmail.com", new conductor_1.Conductor(10, "femenino", 123456789, new vehiculo_1.Vehiculo("XYZ-9876", 8)));
        this.viaje.push(new viaje_1.Viaje(12, 5, viajero));
    };
    Pasajero.prototype.cancelarviaje = function () {
        console.log("El viaje ha sido cancelado");
    };
    Pasajero.prototype.mostrarinformacionpasajero = function () {
        return "INFORMACION DEL PASAJERO\n        Nombre del pasajero: ".concat(this.nombre, "\n        Telefono del pasajero: ").concat(this.telefono, "\n        Correo del pasajero: ").concat(this.correo, "\n        ").concat(this.conductor.Obtenerinformacion());
    };
    return Pasajero;
}());
exports.Pasajero = Pasajero;
