// Pour créer le store
import {createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from './reducers/counterReducer';
import AddCartReducer from './reducers/addCartReducer';
import dataImgReducer from "./reducers/dataImgReducer";
import thunk from 'redux-thunk';


//Combine reducers
const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer,
  dataImgReducer
})
// Je crée mon store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;