import { NewFoodEntry} from "./types";
import { TypeFood } from "./enums";

const parseName = (nameFromRequest: any): string => {
    if(!isString(nameFromRequest)) {
        throw new Error('Incorrect or missing name');
    }

    return nameFromRequest
}

const parseOrigin = (originFromRequest: any): string => {
    if(!isString(originFromRequest)) {
        throw new Error('Incorrect or missing origin');
    }

    return originFromRequest
}

const parseIngredients = (ingredientFromRequest: any): string[] => {
    if(!isStringArray(ingredientFromRequest)) {
        throw new Error('Incorrect or missing ingredient');
    }

    return ingredientFromRequest
}

const parseKilocalories = (caloriesFromRequest: any): number => {
    if(!isNumber(caloriesFromRequest)) {
        throw new Error('Incorrect or missing calories');
    }

    return caloriesFromRequest
}

const parseCarbohydrates = (carbohydratesFromRequest: any): number => {
    if(!isNumber(carbohydratesFromRequest)) {
        throw new Error('Incorrect or missing carbohydrates');
    }

    return carbohydratesFromRequest
}

const parseFats = (fatsFromRequest: any): number => {
    if(!isNumber(fatsFromRequest)) {
        throw new Error('Incorrect or missing fats');
    }

    return fatsFromRequest
}

const parseWeight = (weightFromRequest: any): number => {
    if(!isNumber(weightFromRequest)) {
        throw new Error('Incorrect or missing weight');
    }

    return weightFromRequest
}

const parsePrice = (priceFromRequest: any): number => {
    if(!isNumber(priceFromRequest)) {
        throw new Error('Incorrect or missing price');
    }

    return priceFromRequest
}

const parseTypeFood = (typeFoodFromRequest: any): TypeFood => {
    if( !isString(typeFoodFromRequest) || !isTypeFood(typeFoodFromRequest) ){
        throw new Error('Incorrect or missing TypeFood');
    }

    return typeFoodFromRequest
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
        peso: parseWeight(object.peso),
        precio: parsePrice(object.precio),
        tipo: parseTypeFood(object.tipo)
        //...
    } 
    return newEntry;
}

export default toNewFoodEntry