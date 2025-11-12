export interface RespuestaBD {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Personajes[];
  support: InfGeneral;
}
export interface Personajes {
  // id: number;
  // email: string;
  // first_name: string;
  // last_name: string;
  // avatar: string;

  id: string;
  nombre: string;
  apellido: string;
  imagen: string;
  descripcion: string;
  armas: number;
  daño: number;
  salud: number;
  velocidad: number;
}
export interface PersonajesFirebase {
  id: string;
  nombre: string;
  apellido: string;
  imagen: string;
  descripcion: string;
  armas: number;
  daño: number;
  salud: number;
  velocidad: number;
}


export interface RespuestaDetalle {
  data: Detalle;
  support: InfGeneral;
}
export interface InfGeneral{
  url: string;
  text: string;
}
export interface Detalle{
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  // support: Array;
}
