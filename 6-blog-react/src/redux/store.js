import {createStore, applyMiddleware, combineReducers} from 'redux';
import articleReducer from './articles/articleReducer';
import thunk from 'redux-thunk';

// Permet d'appeler plusieurs reducers
const rootReducer = combineReducers({
  articleReducer
})

// applyMiddleware(thunk) sera appelé automatiquement quand on fera un dispatch
// Cela nous permet de faire des appels asynchrone
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;