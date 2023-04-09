
import React from 'react'
const INITIAL_STATE = {
  cart: 60
}

function AddCartReducer(state = INITIAL_STATE, action) {

  switch(action.type) {
    case 'ADDTOCART' : {
      return {
        ...state,
        // Payload passé dans l'action
        cart: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default AddCartReducer;
