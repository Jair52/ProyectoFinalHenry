import {
  GET_FOOD,
  GET_FOOD_ID,
  GET_FOOD_NAME,
  FILTER_BY_COUNTRY,
  FILTER_BY_FOOD,
  PRICE_ORDER,
  RESET_FILTERS,
  // POST_FOOD,
  // ADD_CART,
  // REMOVE_CART,
} from './ActionsTypes';

interface Product {
  id: number,
  name: string,
  country: string,
  typeFood: string,
  price: number,
}

interface FoodState {
  food: Product[],
  foodCopy: Product[],
  typeFood: Product[],
  countryFood: Product[],
  priceFood: Product[],
  detailFood: Product[],
  orderFood: Product[],
  nameFood: Product[],
}
// Los datos que quiero que tenga
type FoodAction = {
  type: string,
  payload: any,
}

const initialState: FoodState = {
  food: [],
  foodCopy: [],
  typeFood: [],
  countryFood: [],
  priceFood: [],
  detailFood: [],
  orderFood: [],
  nameFood: [],
}

function Reducer(state: FoodState = initialState, action: FoodAction): FoodState {
  switch (action.type) {
    case GET_FOOD: 
      return {
        ...state,
        food: action.payload,
        foodCopy: action.payload,
      }

    case GET_FOOD_ID: 
    return {
      ...state,
      detailFood: action.payload,
    }

    case GET_FOOD_NAME: 
    return {
      ...state,
      nameFood: action.payload,
    }

    case FILTER_BY_COUNTRY:
      const { country } = action.payload;
      if(country === 'todos'){
        return {
          ...state,
          countryFood: state.foodCopy,
        }
      }else {
        const filteredCountry = state.foodCopy.filter(
          (food) => food.country === country
        )
        return{
          ...state,
          countryFood: filteredCountry
        }
      }
      case FILTER_BY_FOOD:
        const { typeFood } = action.payload;
        if(typeFood === 'todos'){
          return {
            ...state,
            typeFood: state.foodCopy,
          }
        }else {
          const filteredFood = state.foodCopy.filter(
            (food) => food.typeFood === typeFood
          )
          return {
            ...state,
            typeFood: filteredFood
          }
        }
        
    case PRICE_ORDER:
      let priceSort = action.payload === 'asc'
        ? state.foodCopy.slice().sort((a, b) => a.price - b.price)
        : state.foodCopy.slice().sort((a, b) => a.price - b.price)
      return{
        ...state,
        food: priceSort
      }

    case RESET_FILTERS:
      return {
        ...state,
        food: state.foodCopy 
      }
    default:
      return {...state}
  }
}

export default Reducer


