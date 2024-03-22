import { GET_FOOD } from '../actions/ActionsTypes';





export const getFood = (comida : any) => ({
    type: GET_FOOD,
    payload: comida,
  })