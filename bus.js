"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
var vehiculo_1 = require("./vehiculo");
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(placa, capacidad, marca) {
        var _this = _super.call(this, placa, capacidad) || this;
        _this.marca = marca;
        return _this;
    }
    Bus.prototype.Mostrarinfo = function () {
        return "INFORMACION DEL VEHICULO \n        Placa del vehiculo: ".concat(this.placa, "\n        Capacidad del vehiculo: ").concat(this.capacidad, " asientos\n        Marca del vehiculo: ").concat(this.marca);
    };
    return Bus;
}(vehiculo_1.Vehiculo));
exports.Bus = Bus;
