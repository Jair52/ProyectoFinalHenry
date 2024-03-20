import { NewFoodEntry} from "./types";
import { TypeFood } from "./enums";

const parseName = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing name');
    }

    return commentFromRequest
}

const parseOrigin = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing origin');
    }

    return commentFromRequest
}

//!REVISAR
const parseIngredients = (commentFromRequest: any): string[] => {
    if(!isStringArray(commentFromRequest)) {
        throw new Error('Incorrect or missing ingredient');
    }

    return commentFromRequest
}
//!

const parseKilocalories = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing calories');
    }

    return commentFromRequest
}

const parseCarbohydrates = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing carbohydrates');
    }

    return commentFromRequest
}

const parseFats = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing fats');
    }

    return commentFromRequest
}

const parseWeigth = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing weigth');
    }

    return commentFromRequest
}

const parsePrice = (commentFromRequest: any): number => {
    if(!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing price');
    }

    return commentFromRequest
}

const parseType = (weatherFromRequest: any): TypeFood => {
    if( !isString(weatherFromRequest) || !isTypeFood(weatherFromRequest) ){
        throw new Error('Incorrect or missing TypeFood');
    }

    return weatherFromRequest
}

//*-----------------------------------------------------------

const isString = (string: string): boolean => {
    return typeof string === 'string';
}

const isNumber = (number: number): boolean => {
    return typeof number === 'number';
}

const isTypeFood = (param: any): boolean => {
    return Object.values(TypeFood).includes(param);
}

const isStringArray = (stringArray: any): boolean => {
    // Verificar si el argumento es un array
    if (!Array.isArray(stringArray)) {
        return false;
    }
    
    // Verificar si todos los elementos del array son cadenas
    return stringArray.every(element => typeof element === 'string');
}

const toNewFoodEntry = (object: any): NewFoodEntry => {
    const newEntry: NewFoodEntry = {
        nombre: parseName(object.nombre),
        origen: parseOrigin(object.origen),
        ingredientes: parseIngredients(object.ingredientes),
        kilocalorias: parseKilocalories(object.kilocalorias),
        carbohidratos: parseCarbohydrates(object.carbohidratos),
        grasas: parseFats(object.grasas),
        peso: parseWeigth(object.peso),
        precio: parsePrice(object.precio),
        tipo: parseType(object.tipo)
        //...
    } 
    return newEntry;
}

export default toNewFoodEntry