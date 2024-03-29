"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseName = (nameFromRequest) => {
    if (!isString(nameFromRequest)) {
        throw new Error('Incorrect or missing name');
    }
    return nameFromRequest;
};
const parseOrigin = (originFromRequest) => {
    if (!isString(originFromRequest)) {
        throw new Error('Incorrect or missing origin');
    }
    return originFromRequest;
};
const parseIngredients = (ingredientFromRequest) => {
    if (!isStringArray(ingredientFromRequest)) {
        throw new Error('Incorrect or missing ingredient');
    }
    return ingredientFromRequest;
};
const parseKilocalories = (caloriesFromRequest) => {
    if (!isNumber(caloriesFromRequest)) {
        throw new Error('Incorrect or missing calories');
    }
    return caloriesFromRequest;
};
const parseCarbohydrates = (carbohydratesFromRequest) => {
    if (!isNumber(carbohydratesFromRequest)) {
        throw new Error('Incorrect or missing carbohydrates');
    }
    return carbohydratesFromRequest;
};
const parseFats = (fatsFromRequest) => {
    if (!isNumber(fatsFromRequest)) {
        throw new Error('Incorrect or missing fats');
    }
    return fatsFromRequest;
};
const parseWeigth = (weigthFromRequest) => {
    if (!isNumber(weigthFromRequest)) {
        throw new Error('Incorrect or missing weigth');
    }
    return weigthFromRequest;
};
const parsePrice = (priceFromRequest) => {
    if (!isNumber(priceFromRequest)) {
        throw new Error('Incorrect or missing price');
    }
    return priceFromRequest;
};
const parseTypeFood = (foodFromRequest) => {
    if (!isString(foodFromRequest) || !isTypeFood(foodFromRequest)) {
        throw new Error('Incorrect or missing TypeFood');
    }
    return foodFromRequest;
};
//* comprobacion imagen
const parseImage = (foodFromRequest) => {
    if (!isString(foodFromRequest) || !isTypeFood(foodFromRequest)) {
        throw new Error('Incorrect or missing TypeFood');
    }
    return foodFromRequest;
};
//*-----------------------------------------------------------
const isString = (string) => {
    return typeof string === 'string';
};
const isNumber = (number) => {
    return typeof number === 'number';
};
const isTypeFood = (param) => {
    return Object.values(enums_1.TypeFood).includes(param);
};
const isStringArray = (stringArray) => {
    // Verificar si el argumento es un array
    if (!Array.isArray(stringArray)) {
        return false;
    }
    // Verificar si todos los elementos del array son cadenas
    return stringArray.every(element => typeof element === 'string');
};
const toNewFoodEntry = (object) => {
    const newEntry = {
        nombre: parseName(object.nombre),
        origen: parseOrigin(object.origen),
        ingredientes: parseIngredients(object.ingredientes),
        kilocalorias: parseKilocalories(object.kilocalorias),
        carbohidratos: parseCarbohydrates(object.carbohidratos),
        grasas: parseFats(object.grasas),
        peso: parseWeigth(object.peso),
        precio: parsePrice(object.precio),
        tipo: parseTypeFood(object.tipo),
        imagen: parseImage(object.image)
        //...
    };
    return newEntry;
};
exports.default = toNewFoodEntry;
