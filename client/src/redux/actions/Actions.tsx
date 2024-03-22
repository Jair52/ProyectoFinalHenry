import { GET_FOOD, GET_PAIS} from '../actions/ActionsTypes';





export const getFood = (comida : any) => ({
    type: GET_FOOD,
    payload: comida,
  })

  export const getPais = (event: any) => (
    {
    type: GET_PAIS,
    payload: event,
  })