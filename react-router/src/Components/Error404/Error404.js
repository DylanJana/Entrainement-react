import { useNavigate } from "react-router-dom";

function Error404() {
  // Hook fourni par react route pour naviguer ou je veux
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ooops ! Cette page n'existe pas</h1>
      <button onClick={() => navigate('/')}>Retourner à l'accueil</button>
    </div>
  )
}

export default Error404;