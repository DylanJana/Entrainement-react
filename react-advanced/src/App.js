import { useState } from 'react';
import './App.css';
// Import component
import Content from './Content';


function App() {

  const[toggle, setToggle] = useState([1,2,3]);


  const toggleFunc = () => {
    const newArr= [...toggle]
    newArr.push(4);
    setToggle(newArr);
  }

  return (
    <div className="App">
      <Content>
        <h1>Titre de mon article 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Content>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
