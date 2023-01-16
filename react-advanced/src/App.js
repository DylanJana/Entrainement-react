import { useState, useEffect, useRef } from 'react';
import { ref } from 'vue';
import './App.css';
// Import de la vidéo téléchargé en local
import Video from './Video.mp4';

function App() {

  const[toggle, setToggle] = useState(true);

  const maRef = useRef([]);

  useEffect(() => {
    // Lorsque je vais redimensionner ma fenête
    window.addEventListener('resize', actionResize);

    function actionResize() {
      console.log("Resized !!!")
    }
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  /* Le el en paramètre, s'agit de l'élément d'où
  est appelé la méthode
  */
  const addToRef = el => {
    /* Si l'élément sélectionné (mon élément du Dom)
    n'est pas présent dans mon tableau maRef dans ce
    cas je le push à l'intérieur
    */
    if(el && !maRef.current.includes(el)) {
      maRef.current.push(el);
    }
  }

  return (
    <div className="App">
      <video 
      width='750px' 
      height='500' 
      autoPlay 
      controls 
      muted
      ref={addToRef}>
        <source src={Video} type='video/mp4/' />
      </video>
      <video 
      width='750px' 
      height='500' 
      autoPlay 
      controls 
      muted
      ref={addToRef}>
        <source src={Video} type='video/mp4/' />
      </video>
      <video 
      width='750px' 
      height='500' 
      autoPlay 
      controls 
      muted
      ref={addToRef}>
        <source src={Video} type='video/mp4/' />
      </video>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
