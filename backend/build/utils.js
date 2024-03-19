"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseName = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing name');
    }
    return commentFromRequest;
};
const parseOrigin = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing origin');
    }
    return commentFromRequest;
};
//!REVISAR
const parseIngredients = (commentFromRequest) => {
    if (!isStringArray(commentFromRequest)) {
        throw new Error('Incorrect or missing ingredient');
    }
    return commentFromRequest;
};
//!
const parseKilocalories = (commentFromRequest) => {
    if (!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing calories');
    }
    return commentFromRequest;
};
const parseCarbohydrates = (commentFromRequest) => {
    if (!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing carbohydrates');
    }
    return commentFromRequest;
};
const parseFats = (commentFromRequest) => {
    if (!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing fats');
    }
    return commentFromRequest;
};
const parseWeigth = (commentFromRequest) => {
    if (!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing weigth');
    }
    return commentFromRequest;
};
const parsePrice = (commentFromRequest) => {
    if (!isNumber(commentFromRequest)) {
        throw new Error('Incorrect or missing price');
    }
    return commentFromRequest;
};
const parseType = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isTypeFood(weatherFromRequest)) {
        throw new Error('Incorrect or missing TypeFood');
    }
    return weatherFromRequest;
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
        tipo: parseType(object.typeFood)
        //...
    };
    return newEntry;
};
exports.default = toNewFoodEntry;
