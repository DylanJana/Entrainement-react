import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Pour créer le store
import {createStore} from "redux";
import {Provider} from "react-redux";
import CounterReducer from './Reducers/CounterReducer';

// Je crée mon store
const Store = createStore(CounterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

