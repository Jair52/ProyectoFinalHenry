"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFood = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const food_json_1 = __importDefault(require("./food.json"));
const foods = food_json_1.default;
const getEntries = () => foods;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = foods.find(d => d.id === id);
    if (entry !== undefined && entry !== null) {
        const restOfFood = __rest(entry, []);
        return restOfFood;
    }
    return entry;
    // return undefined
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return foods.map(({ id, nombre, origen, ingredientes, kilocalorias, carbohidratos, grasas, peso, precio, tipo }) => {
        return {
            id,
            nombre,
            origen,
            ingredientes,
            kilocalorias,
            carbohidratos,
            grasas,
            peso,
            precio,
            tipo
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addFood = (newFoodEntry) => {
    const newFood = Object.assign({ 
        // id: foods.length + 1
        id: Math.max(...foods.map(d => d.id)) + 1 }, newFoodEntry);
    foods.push(newFood);
    return newFood;
};
exports.addFood = addFood;
