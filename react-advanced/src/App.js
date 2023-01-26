import { useState, useMemo, useCallback } from 'react';
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

  const array = useMemo(() => {
    return [1,2,3,4]
  }, [])

  const foo = useCallback(() => {
    console.log('Click');
  }, []);

  return (
    <div className="App">
      <Content num={array} foo={foo}/>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
