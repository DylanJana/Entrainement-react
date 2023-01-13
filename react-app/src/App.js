// Il n'est plus nécessaire d'importer react
// La méthode useState permet de gérer les states des composants
import {useState} from 'react';
import Item from './Item';

function App() {
  // J'initialise mon state
  const [monState, setMonState] = useState(10);
  return (
    <div className="App">
      <h1>Hello app react</h1>
      <Item />
      {monState}
    </div>
  );
}

export default App;
