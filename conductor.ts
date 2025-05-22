import { Pasajero }from "./pasajero";
import { Vehiculo } from "./vehiculo";

export class Conductor{
    experiencia: number;
    genero: string;
    licencia: number;
    vehiculo: Vehiculo
    pasajero: Pasajero[]=[];
    constructor(experiencia: number, genero: string, licencia: number, vehiculo: Vehiculo){
        this.experiencia = experiencia;
        this.genero = genero;
        this.licencia = licencia;
        this.vehiculo = vehiculo;
    }
    trasladar():void{
        const transportista = new Conductor(4, "femenino", 987654321, new Vehiculo("ABC-1234", 10));
        this.pasajero.push(new Pasajero("María", 9876543210, "maria@gmail.com", transportista));
    }
    Obtenerinformacion(): string{
        return `INFORMACION DEL CONDUCTOR
        Experiencia del conductor: ${this.experiencia}
        Genero del conductor: ${this.genero}
        Licencia del conductor: ${this.licencia}
        ${this.vehiculo.Mostrarinfo()}`;
    }
}   