import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Encapsuler l'application et à hydrate l'application en donnée
// Il permet d'avoir accès aux données dans toute l'app
import { Provider } from 'react-redux';
// Import store
import store from './redux/store';
// Import router
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <Provider store={store}>
            <App />
        </Provider> 
    </BrowserRouter>
);
