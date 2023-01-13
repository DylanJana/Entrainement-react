// Il n'est plus nécessaire d'importer react
import { useState } from 'react';
import Item from './Components/Item/Item.js';


function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      {/* Fonction ternaire */}
      {toggle ? <h1>Le state est True</h1> :
        <h1>Le state est False</h1>}
      <button onClick={changeState}>Changer de State</button>
    </div>
  );
}

export default App;
