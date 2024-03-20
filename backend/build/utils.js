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
const parseWeight = (weightFromRequest) => {
    if (!isNumber(weightFromRequest)) {
        throw new Error('Incorrect or missing weight');
    }
    return weightFromRequest;
};
const parsePrice = (priceFromRequest) => {
    if (!isNumber(priceFromRequest)) {
        throw new Error('Incorrect or missing price');
    }
    return priceFromRequest;
};
const parseTypeFood = (typeFoodFromRequest) => {
    if (!isString(typeFoodFromRequest) || !isTypeFood(typeFoodFromRequest)) {
        throw new Error('Incorrect or missing TypeFood');
    }
    return typeFoodFromRequest;
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
        peso: parseWeight(object.peso),
        precio: parsePrice(object.precio),
        tipo: parseTypeFood(object.tipo)
        //...
    };
    return newEntry;
};
exports.default = toNewFoodEntry;
