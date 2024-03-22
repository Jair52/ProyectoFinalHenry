
import { GET_FOOD } from '../actions/ActionsTypes';





interface Plato {
  id: number;
  nombre: string;
  origen: string;
  ingredientes: any;
  kilocalorias: number;
  carbohidratos: number;
  grasas: number;
  peso: number;
  precio: number;
  tipo: string;
  imagen: string;
}

export interface StoreState {
  platos: Plato[];
}

export interface Action {
  type: any;
  payload: any;
}

const initialState: StoreState = {
  platos: [],
};


const Reducer = (state: StoreState = initialState, action: Action): StoreState => {
  switch (action.type) {
    case GET_FOOD:
      console.log('toy en el reducer');
      
      return{
        ...state, 
        platos: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
