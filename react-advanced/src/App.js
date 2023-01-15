import { useState, useEffect, useRef } from 'react';
import './App.css';
// Import de la vidéo téléchargé en local
import Video from './Video.mp4';

function App() {

  const[toggle, setToggle] = useState(true);

  const maRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      maRef.current.pause();
    }, 1500)
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <video 
      width='750px' 
      height='500' 
      autoPlay 
      controls 
      muted
      ref={maRef}>
        <source src={Video} type='video/mp4/' />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
