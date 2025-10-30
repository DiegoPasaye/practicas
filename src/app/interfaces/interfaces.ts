export interface RespuestaBD {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Personajes[];
  support: InfGeneral;
}
export interface Personajes {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
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
