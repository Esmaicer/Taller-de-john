"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
var Ruta = /** @class */ (function () {
    function Ruta(origen, destino, distancia, Viaje) {
        this.origen = origen;
        this.destino = destino;
        this.distancia = distancia;
        this.Viaje = Viaje;
    }
    Ruta.prototype.mostrartodainfo = function () {
        console.log("        INFORMACION DE LA RUTA\n        Origen de la ruta: ".concat(this.origen, "\n        Destino de la ruta: ").concat(this.destino, "\n        Distancia de la ruta: ").concat(this.distancia, " km\n        ").concat(this.Viaje.mostarinformacionviaje()));
    };
    return Ruta;
}());
exports.Ruta = Ruta;
