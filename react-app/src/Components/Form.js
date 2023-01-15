import { useState } from 'react';
// Import UUID to generate unique ID
import {v4 as uuidv4} from 'uuid';
import Item from './Item';

function Form() {
// Début création du state
  const [dataArr, setDataArr] = useState([
    {txt: 'Promener le chien', id:uuidv4()},
    {txt: 'Sport', id:uuidv4()},
    {txt: 'Coder avec React', id:uuidv4()}
  ])

  // Ce state va me permettre de prendre en compte le contenu de mon input
  const [stateInput, setStateInput] = useState('');

// Fin création du state
// Création des fct nécessaire à l'app
  const deleteElement = id => {
    const filteredState = dataArr.filter(item => {
      return item.id !== id;
    })
    setDataArr(filteredState);
  }

  const linkedInput = e => {
    setStateInput(e);
  }

  // Fct déclencher au submit du formulaire
  const addTodo = e => {
    e.preventDefault();
    // Prend tous ce qu'il y a dans dataArr et le copie
    const newArr = [...dataArr]

    //Création d'un nouvel objet
    const newTodo = {};
    // Je crée la propriété txt et lui attribue la valeur de stateInput
    newTodo.txt = stateInput;
    // Je crée la propriété id qui aura un id unique généré par uuid
    newTodo.id = uuidv4();

    // Je push le nouvel objet dans le tableau newArr
    newArr.push(newTodo);
    // Je change le state de dataArr
    setDataArr(newArr);
    // Je vide mon input
    setStateInput('');
  }
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

      <form className="mb-3" onSubmit={e => addTodo(e)} >
        {/* htmlFor correspond à l'attribut for utilisé dans les
        formulaires, mais en JSX je dois écris htmlFor */}
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        {/*A chaque fois que j'entre quelque chose dans l'input
      la fonction linkedInput est appelée. Cette fct reçoit en
    paramètre la valeur actuel de l'input*/}
        <input
        value={stateInput} 
        onInput={e => {linkedInput(e.target.value)}}
        type="text" 
        className="form-control" 
        id='todo' />
        <button className="mt-2 btn btn-primary d-block">Envoyer</button>      
      </form>

      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        {dataArr.map(item => {
          return (
            <Item
            txt= {item.txt}
            key= {item.id}
            id= {item.id}
            delFunc= {deleteElement} 
          />
          )
        })}
      </ul>
    </div>
  )
}

export default Form;