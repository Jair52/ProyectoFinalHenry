import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './Reducer';

const composeEnhancer = compose

const Store = createStore (
  Reducer, composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default Store