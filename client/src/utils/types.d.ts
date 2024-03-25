export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

interface Plato {
  id: number;
  nombre: string;
  origen: string;
  ingredientes: string[];
  kilocalorias: number;
  carbohidratos: number;
  grasas: number;
  peso: number;
  precio: number;
  tipo: string;
  imagen: string;
}

export interface StoreState {
  platos: Plato[];
  filtros: Plato[];
  pais: string;
  tipo: string;
}

export interface Action {
  type: any;
  payload: any;
}

export interface Usuario {
  email: string;
  password: string;
}
