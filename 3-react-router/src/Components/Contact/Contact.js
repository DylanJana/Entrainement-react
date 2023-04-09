import './Contact.css';
import { useLocation } from 'react-router-dom';

function Contact() {
  // Get more info on my page like 
  // pathname, search, hash, state etc...
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export default Contact;
