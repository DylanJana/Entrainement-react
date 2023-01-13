// Il n'est plus nécessaire d'importer react
// La méthode useState permet de gérer les states des composants
import {useState} from 'react';
import Item from './Item';

function App() {
  // J'initialise mon state
  const [monState, setMonState] = useState(10);
  // Je crée la fonction liée à mon event click du button change state
  // Elle prendra des datas en argument
  const modifyState = (data) => {
    // console.log(data);
    setMonState(data);
  }
  return (
    <div className="App">
      <h1>Hello State : {monState}</h1>
      <Item func={modifyState} />
    </div>
  );
}

export default App;
