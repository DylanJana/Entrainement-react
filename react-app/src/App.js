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
      {/* Toggle la classe */}
      <div className= {toggle ? "box animated" : "box"}></div>
      {/* Toggle le style inline peut utiliser car lourd */}
      {/* <div className="box" style={{ backgroundColor: toggle ? "salmon" : "blue" }}>
      </div> */}
      <button onClick={changeState}>Changer de State</button>
    </div>
  );
}

export default App;
