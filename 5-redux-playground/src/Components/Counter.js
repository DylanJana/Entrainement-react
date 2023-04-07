import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import AddCartReducer from '../redux/reducers/addCartReducer';
import { getCatImg } from '../redux/reducers/dataImgReducer';

export default function Counter() {
  //Creation du state
  const [cartData, setCartData] = useState(0);
  // Je vais récupérer les INITIAL_STATE de chaque reducer
  const {cart, count, imgUrl} = useSelector(state => ({
    // J'initialise la constante cart avec le state de AddCartReducer
    ...state.AddCartReducer,
    //J'initialise la constante count avec le state de CounterReducer
    ...state.CounterReducer,
    // Je récupére les données de getCatImg
    ...state.dataImgReducer
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

  useEffect(() => {
    // A la fin d'affichage de mon composant j'envoi un dispatch
    dispatch(getCatImg())
  }, [])

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
      {/* Quand j'ai reçu mon img alors je crée une balise img avec la source de l'images
      récupérée */}
      <div>
      {imgUrl && <img style={{
        width: '300px'
      }} src={imgUrl} />}
      </div>
    </div>
  )
}
