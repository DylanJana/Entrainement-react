import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dataComponent, setDataComponent] = useState(1);

  // useEffect
  useEffect(() => {
    console.log("Premier affichage")
  }, [])

  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }

  return (
    <div className="App">
      <div>
      <h1>Le state est {dataComponent}</h1>
      <button onClick={() => changeState()}>Change State</button>
      </div>
    </div>
  );
}

export default App;
