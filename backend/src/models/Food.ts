import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { TypeFood } from '../enums';

@Table
export class FoodEntry extends Model {
    @Column
    nombre: string;

    @Column
    origen: string;

    @Column(DataType.ARRAY(DataType.STRING))
    ingredientes: string[];

    @Column
    kilocalorias: number;

    @Column
    carbohidratos: number;

    @Column
    grasas: number;

    @Column
    peso: number;

    @Column
    precio: number;

    @Column(DataType.ENUM(...Object.values(TypeFood)))
    tipo: TypeFood;

    @Column
    imagen: string;
}