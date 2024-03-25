import {
  FoodEntry,
  NewFoodEntry,
  NonSensitiveInfoFoodEntry,
} from "../utils/types";
import foodData from "./food.json";

const foods: Array<FoodEntry> = foodData as Array<FoodEntry>;

export const getEntries = (): FoodEntry[] => foods;

export const findById = (id: number): NonSensitiveInfoFoodEntry | undefined => {
  const entry = foods.find((d) => d.id === id);
  if (entry !== undefined && entry !== null) {
    const { ...restOfFood } = entry;
    return restOfFood;
  }
  return entry;
  // return undefined
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoFoodEntry[] => {
    return foods.map(
      ({
        id,
        nombre,
        origen,
        ingredientes,
        kilocalorias,
        carbohidratos,
        grasas,
        peso,
        precio,
        tipo,
        imagen,
      }) => {
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
          tipo,
          imagen,
        };
      }
    );
  };

export const addFood = (newFoodEntry: NewFoodEntry): FoodEntry => {
  const newFood = {
    // id: foods.length + 1
    id: Math.max(...foods.map((d) => d.id)) + 1,
    ...newFoodEntry,
  };

  foods.push(newFood);
  return newFood;
};
