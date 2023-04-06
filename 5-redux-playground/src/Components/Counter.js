import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

export default function Counter() {

  // Je récupérer dans mon INITIAL_STATE la propriété count
  const count = useSelector(state => state.count)

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

  return (
    <div>
      <h1>Les données : {count}</h1>
      {/* Je crée mes boutons d'incrémentation */}
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button>
    </div>
  )
}
