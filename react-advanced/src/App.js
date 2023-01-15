import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(1);

  // Permet d'exécuter une méthode tous les x temps
  // Dans ce cas de figure toutes les 1000ms
  // Cette méthode peut beuguer
  /*
  setInterval(() => {

    setTimer(timer + 1);
  }, 1000)
  */


  // Même travail que setInterval avec useEffect
  useEffect(() => {
    const intervalID = setInterval(() => {
      /*useState fourni un state frais à chaque fois, ce qui permet
      d'avoir une valeur qui s'incrémente correction, et qui ne 
      recommence pas à 1 dans ce cas de figure */
      setTimer(timer => timer + 1);
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, [])

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
