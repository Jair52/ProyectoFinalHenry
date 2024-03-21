import axios from 'axios';
import { Dispatch } from 'redux';
import {
  GET_FOOD,
  GET_FOOD_ID,
  GET_FOOD_NAME,
  FILTER_BY_COUNTRY,
  PRICE_ORDER,
  FILTER_BY_FOOD,
  RESET_FILTERS,
  ADD_CART,
  REMOVE_CART,
} from './ActionsTypes';

export const getFood = () => {
  return async (dispatch: Dispatch) => {
    try {
      const backData = await axios.get ('url');
      const food = backData.data;
      dispatch({
        type: GET_FOOD,
        payload: food
      })
    } catch (error) {
      console.error('Error', error)
    }
  }
}

export const serchByID = ( id: number ) => {
  return async(dispatch: Dispatch) =>{
    try {
      const backData = await axios.get(`url/${id}`);
      const counrtyId = backData.data
      dispatch({
        type: GET_FOOD_ID,
        payload: counrtyId

      })
      
    } catch (error) {
      console.error('Error', error)
    }

  }
}

export const serchByName = ( name: string ) => {
  return async(dispatch: Dispatch) =>{
    try {
      const apidata = await axios.get(`url/${name}`);
      const counrtyName = apidata.data
      dispatch({
        type: GET_FOOD_NAME,
        payload: counrtyName

      })
      
    } catch (error) {
      console.error('Error', error)
    }

  }
}

export const filterByCountry = (country: string) => {
  return {
    type: FILTER_BY_COUNTRY,
    payload: country
  }
}

export const filterByFood = (typeFood: string) => {
  return {
    type: FILTER_BY_FOOD,
    payload: typeFood
  }
}

export const sortPrice = (price: number) => {
  return {
    type: PRICE_ORDER,
    payload: price
  }
} 

export const resetFilters = () => {
  return {
    type: RESET_FILTERS
  }
}

export const addCart = () => {
return {
  type: ADD_CART,

}
}

export const deleteCart = () => {
  return{
    type: REMOVE_CART,

  }
}