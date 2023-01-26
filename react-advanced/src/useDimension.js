import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState();

  useEffect(() => {
    window.addEventListener('resize', resizeFunc);

    function resizeFunc() {
      /* Récupére la valeur de mon navigateur à
      chaque resize de ma fenêtre */
      setDimension(window.innerWidth)
    }
    resizeFunc();

    // Clean up function
    return () => {
      window.addEventListener('resize', resizeFunc)
    }
  },[]);

  return dimension;
}