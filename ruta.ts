import { Viaje } from "./viaje";
export class Ruta{
    origen: string;
    destino: string;
    distancia: number;
    Viaje:Viaje;
    constructor(origen: string, destino: string, distancia: number, Viaje: Viaje){
        this.origen = origen;
        this.destino = destino;
        this.distancia = distancia;
        this.Viaje = Viaje;
    }
    mostrartodainfo():void{
        console.log(`        INFORMACION DE LA RUTA
        Origen de la ruta: ${this.origen}
        Destino de la ruta: ${this.destino}
        Distancia de la ruta: ${this.distancia} km
        ${this.Viaje.mostarinformacionviaje()}`);
    }
}