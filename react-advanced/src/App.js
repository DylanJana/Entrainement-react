import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [dataImg, setDataImg] = useState();

  useEffect(() => {
    // Méthode qui permet de faire appel à des API
    // fetch veut dire, aller chercher
    fetch('https://api.thecatapi.com/v1/images/search')
    /* Si l'appel est un succès, je recois 
    une réponse HTTP*/
      .then(response => {
        console.log(response);
        // Retourne un tableau avec un objet
        // dedans
        return response.json();
      })
      /* Alors si la requète http est un succès
      alors donne moi les données */
      .then(data => {
        // Dans le premier objet prend url
        setDataImg(data[0].url);
      })
  }, []);
  
  return (
    <div className="App">
      {/*Lorsque j'ai reçu les données dataImg est
      true dans ce cas affiche moi l'image du chat
      avec une taill de 500px*/}
      {dataImg && 
      <img 
      src={dataImg} 
      alt='cat image'
      style={{width: '500px'}} 
      />}
    </div>
  );
}

export default App;
