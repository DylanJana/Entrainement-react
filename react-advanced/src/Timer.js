import { useState, useEffect, Fragment } from 'react';

function Timer() {
  const [timer, setTimer] = useState(1);

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
    <>
      <h1>{timer}</h1>
      <h1>{timer}</h1>
      <h1>{timer}</h1>
    </>
  );
}

export default Timer;
