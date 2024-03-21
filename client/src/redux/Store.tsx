import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducer/Reducer';

const composeEnhancer = compose

const Store = createStore (
  Reducer, composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default Store