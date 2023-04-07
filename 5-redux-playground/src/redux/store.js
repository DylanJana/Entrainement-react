// Pour créer le store
import {createStore, combineReducers, applyMiddleware } from "redux";
import CounterReducer from './reducers/counterReducer';
import AddCartReducer from './reducers/addCartReducer';


//Combine reducers
const rootReducer = combineReducers({
  CounterReducer,
  AddCartReducer
})

// Je met en place mon middleware
const customMiddleware = store => next => action => {
  // Dans le store, je peux avoir dispatch pour changer le dispatch et getState 
  // Pour obtenir le state
  console.log("store ", store.getState());

  // next est une fonction, on l'appelle lorsque l'on a fini le taf dans le middleware
  // Son objectif est de faire continuer le chemin vers le dispatch (effectuer le dispatch)
  console.log("next ", next)

  const actionModif = {
    type: "ADDTOCART",
    payload: 789
  }

  next(actionModif)
  console.log("NEXT OK ")
  // Action est l'action de notre dispatch
  // Dans notre cas ADDCART avec le payload 0
  console.log(action);
}
// Je crée mon store
const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;