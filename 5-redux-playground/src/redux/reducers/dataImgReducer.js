
import React from 'react'
const INITIAL_STATE = {
  imgUrl: ""
}

function dataImgReducer(state = INITIAL_STATE, action) {

  switch(action.type) {
    case 'LOADIMG' : {
      return {
        ...state,
        // Payload passé dans l'action
        imgUrl: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default dataImgReducer;

// Cette fonction va venir nous exécuter getCatImg de façon asynchrone
// Et j'envoie un nouveau dispatch
export const getCatImg = () => dispatch => {
  fetch ('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'LOADIMG',
        payload: data[0].url
      })
    })
}