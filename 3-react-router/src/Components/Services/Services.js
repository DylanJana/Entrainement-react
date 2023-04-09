import './Services.css';
import {Link, Outlet} from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <nav>
        <Link to="/services/developpement">Développement</Link>
        <Link to="/services/cybersecurite">Cyber sécurité</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Services;