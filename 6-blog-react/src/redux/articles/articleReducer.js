// State initial de mon reducer
const INITIAL_STATE = {
  articles: []
}

function articleReducer(state= INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOADARTICLES' : {
      return {
        ...state,
        articles: action.payload
      }
    }
    default : {
      return state
    }
  }
}

export default articleReducer;

// Appel API 
export const getArticles = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'LOADARTICLES',
        payload: data
      })
    })
}