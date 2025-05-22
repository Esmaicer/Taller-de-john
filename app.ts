import { Bus } from './bus';
import { Pasajero } from './pasajero';
import { Conductor } from './conductor';
import { Viaje } from './viaje';
import { Ruta } from './ruta'; 

const camion = new Bus("ABC-1234", 10, "HONDA");
const hernan = new Conductor(5, "femenino", 1234567890, camion);
const josh = new Pasajero("José", 987654321, "jose@gmail.com", hernan);
const excursion = new Viaje(20, 10, josh);
const manta_cuenca = new Ruta("Quito", "Guayaquil", 900, excursion);


manta_cuenca.mostrartodainfo();