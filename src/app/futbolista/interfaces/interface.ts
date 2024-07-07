export interface PosicionFutbol {
  nombre: string;
  posicion: string;
}

export interface ResponseFutbolista {
  status:  boolean;
  message: string;
  result:  Futbolista[];
  total:   number;
}

export interface ResponseShowFutbolista {
  status: boolean;
  result: Futbolista;
  errors?: Error[];
}

export interface Error {
  type:     string;
  value:    string;
  msg:      string;
  path:     string;
  location: string;
}

export interface Futbolista {
  apodo:        string;
  edad:         number;
  equipos:      string;
  imagen:       string;
  nacionalidad: string;
  nombre:       string;
  posicion:     string;
  usuario:      string;
  uid:          string;
}

