// Il n'est plus nécessaire d'importer react
import { useState } from 'react';
import Item from './Components/Item/Item.js';


function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle);
  }
// Version 1
  // if(toggle) {
  //   return (
  //     <div className="App">
  //       <h1>Le state est True</h1>
  //       <button onClick={changeState}>Changer de State</button>
  //     </div>
  //   );
  // } else if(toggle === false) {
  //     return (
  //       <div className="App">
  //         <h1>Le state est False</h1>
  //         <button onClick={changeState}>Changer de State</button>
  //       </div>
  //     );
  // }

  // Version 2
  let toggleContenu;

  if(toggle) {
    toggleContenu = <h1>Le state est True</h1>
  } else {
    toggleContenu = <h1>Le state est False</h1>
  }

  return (
    <div className="App">
      {toggleContenu}
      <button onClick={changeState}>Changer de State</button>
    </div>
  );
}

export default App;
