import { Vehiculo } from "./vehiculo";
export class Bus extends Vehiculo{
    marca: string;
    constructor(placa: string, capacidad: number, marca: string){
        super(placa, capacidad);
        this.marca = marca;
    }
    override Mostrarinfo(): string {
        return `INFORMACION DEL VEHICULO 
        Placa del vehiculo: ${this.placa}
        Capacidad del vehiculo: ${this.capacidad} asientos
        Marca del vehiculo: ${this.marca}`;
    }
}