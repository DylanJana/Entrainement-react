// Mon state initial
const INITIAL_STATE = {
  count: 0
}

// Le premier argument, le state est égak à INITIAL_STATE de base
// Le reducer est appelé avec des actions à effectuer sur le state
function CounterReducer(state = INITIAL_STATE, action) {
  // En fonction de l'action avec laquelle j'ai appelé mon reducer
  switch(action.type) {
    case 'INCR': {
      return {
        // Je copie tout ce qu'il a dans mon state
        ...state,
        // Je change la valeur de la propriété count en lui ajoutant 1
        count: state.count + 1
      }
    }

    case 'DECR': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default: {
      return state
    }
  }
}

export default CounterReducer;