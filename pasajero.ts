import { Conductor } from "./conductor";
import { Vehiculo } from "./vehiculo";
import { Viaje } from "./viaje";

export class Pasajero{
    private nombre: string;
    private telefono: number;
    private correo: string;
    conductor:Conductor;
    viaje:Viaje[]=[];

    getnombre(): string {
        return this.nombre;
    }
    setnombre(nombre: string){
        this.nombre = nombre;
    }
    gettelefono(): number {
        return this.telefono;
    }
    settelefono(telefono: number){
        this.telefono = telefono;
    }
    getcorreo(): string {
        return this.correo;
    }
    setcorreo(correo: string){
        this.correo = correo;
    }
    constructor(nombre: string, telefono: number, correo: string, conductor:Conductor){
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.conductor = conductor;
    }
    reservarviaje():void{
        const viajero = new Pasajero("Lucía", 987654321, "lucia02@gmail.com", new Conductor(10, "femenino", 123456789, new Vehiculo("XYZ-9876", 8)));
        this.viaje.push(new Viaje(12, 5, viajero));

    }
    cancelarviaje():void{
        console.log("El viaje ha sido cancelado");
    }
    mostrarinformacionpasajero(): string{
        return `INFORMACION DEL PASAJERO
        Nombre del pasajero: ${this.nombre}
        Telefono del pasajero: ${this.telefono}
        Correo del pasajero: ${this.correo}
        ${this.conductor.Obtenerinformacion()}`;
    }
}    