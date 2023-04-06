// Mon state initial
const INITIAL_STATE = {
  count : 0
}

// Le premier argument, le state est égak à INITIAL_STATE de base
// Le reducer est appelé avec des actions à effectuer sur le state
function CounterReducer(state = INITIAL_STATE, action) {
  console.log(state)
  return state;
}

export default CounterReducer;