import { useState, useEffect } from 'react';
// Import Timer
import Timer from './Timer';
import './App.css';

function App() {

  const[toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
