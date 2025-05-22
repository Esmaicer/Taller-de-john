import { Ruta } from "./ruta";
import { Pasajero } from "./pasajero";
import { Vehiculo } from "./vehiculo";
import { Conductor } from "./conductor";
export class Viaje{
    valor: number;
    tiempoestimado: number;
    pasajero: Pasajero;
    ruta: Ruta[] = [];
    constructor(valor: number, tiempoestimado: number, pasajero: Pasajero){
        this.valor = valor;
        this.tiempoestimado = tiempoestimado;
        this.pasajero = pasajero;
    }
    asignarruta():void{
        const trayecto = new Viaje(10, 12, new Pasajero("Sofía", 98765432, "sofia@gmail.com", new Conductor(3, "femenino", 123456789, new Vehiculo("ABC-1234", 10))));
        this.ruta.push(new Ruta(`Guayaquil`, `Cuenca`, 75, trayecto));

    }
    mostarinformacionviaje():string{
        return`INFORMACION DEL VIAJE
        Valor del viaje: ${this.valor}$
        Tiempo estimado del viaje: ${this.tiempoestimado} horas
        ${this.pasajero.mostrarinformacionpasajero()}`;
    }
}