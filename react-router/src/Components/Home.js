import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenue sur le site</h1>
      <Link 
      to="/contact"
      state={"test"}
      >Contact</Link>
    </div>
  )
}

export default Home;
