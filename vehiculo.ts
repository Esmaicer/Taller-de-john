import { Conductor } from "./conductor";
export class Vehiculo{
    placa: string;
    capacidad: number;
    conductor: Conductor[] = [];
    constructor(placa: string, capacidad: number){
        this.placa = placa;
        this.capacidad = capacidad;
    }
    transportar():void{
        const transporte = new Vehiculo("LOO-9694",4);
        this.conductor.push(new Conductor(9,"Femenino",175456883,transporte));
    }
    Mostrarinfo(): string{
        return `INFORMACION DEL VEHICULO
        Placa del vehiculo: ${this.placa}
        Capacidad del vehiculo: ${this.capacidad} asientos`;
    }
}