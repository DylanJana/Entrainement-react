import { useParams } from 'react-router-dom';
import './Profile.css';

function Profile() {

  // Get the id of url /profil/:id
  const params = useParams();
  // /profil/enzo show enzo
  console.log(params);
  return (
    <div>
      <h1>Bienvenue sur votre profil.</h1>
      <p>{params.id}</p>
    </div>
  )
}

export default Profile;
