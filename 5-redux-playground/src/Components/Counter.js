import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import AddCartReducer from '../redux/reducers/addCartReducer';

export default function Counter() {
  //Creation du state
  const [cartData, setCartData] = useState(0);
  // Je vais récupérer les INITIAL_STATE de chaque reducer
  const {cart, count} = useSelector(state => ({
    // J'initialise la constante cart avec le state de AddCartReducer
    ...state.AddCartReducer,
    //J'initialise la constante count avec le state de CounterReducer
    ...state.CounterReducer
  }))

  // J'instancie useDispatch pour le réutiliser ensuite
  const dispatch = useDispatch();

  const incrFunc = () => {
    // Au sein de dispatch je lui passe un objet
    dispatch({
      type: "INCR"
    })
  }

  const decrFunc = () => {
    dispatch({
      type:"DECR"
    })
  }

  // addToCart
  const addToCartFunc = () => {
    dispatch({
      type: "ADDTOCART",
      // Les données que je veux passer à mon action
      payload: cartData
    })
  }

  return (
    <div>
      <h1>Votre panier : {cart} {count}</h1>
      {/* Je crée mes boutons d'incrémentation */}
      {/* <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button> */}
      <input 
      value={cartData}
      // Quand j'écris à l'intérieur
      onInput={e => setCartData(e.target.value)}
      type="number" />
      <br />
      <button
        onClick={addToCartFunc}
      >
        Ajouter au panier
      </button>
    </div>
  )
}
