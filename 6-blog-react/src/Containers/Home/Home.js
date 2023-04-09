import React from 'react';
import './Home.css';
import Card from '../../Components/Card/Card';
// useSelector permet d'utiliser le state
// useDispatch permet d'envoyer des infos aux reducers
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
// import la méthode pour générer des id automatiquements
import {v4 as uuidv4} from 'uuid';
// Fonction asynchrone, API pour récupérer la data
import { getArticles } from '../../redux/articles/articleReducer';

export default function Home() {
  // Je dois le présenter de cette façon dû à la présence d'un combineReducer
  const {articles} = useSelector(state => ({
    // Récupére la propriété articles, depuis l'objet ci-dessous
    ...state.articleReducer
  }))

  const dispatch = useDispatch();

  useEffect(() => {
    // Si mon tableau de article est vide alors je récupére mes articles via l'API
    if(articles.length === 0) {
      dispatch(getArticles());
    }
  }, [])
  return (
    <>
      <h1 className="home-title">Tous les articles</h1>
      <div className="container-cards">
        {/* J'itére sur mon tableau articles, pour chaque item du tableau, je lui attribue
        un id grâce à uuidv4 et je récupére le titre de l'item (obtenu via l'API) */}
        {articles.map(item => {
          return (
            <Card key={uuidv4()}>
              <h2>{item.title}</h2>
              <a href="#">Lire l'article</a>
            </Card>
          )
        })}
      </div>
    </>
  )
}
