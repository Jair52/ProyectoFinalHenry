import { TypeFood } from "./enums";

export interface FoodEntry { 
    id: number,
    nombre: string,
    origen: string,
    ingredientes: string[],
    kilocalorias: number,
    carbohidratos: number,
    grasas: number,
    peso: number,
    precio: number,
    tipo: TypeFood,
    imagen: image,
    descripcion: string;
    stock: string;
};

export type NonSensitiveInfoFoodEntry = FoodEntry;

export type NewFoodEntry = Omit<FoodEntry , 'id'>;
