import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import Services from "./Components/Services/Services";
import Error404 from "./Components/Error404/Error404";
import './App.css';
import Contact from "./Components/Contact/Contact";
import Development from "./Components/Services/Development/Development";
import CyberSecurity from "./Components/Services/CyberSecurity/CyberSecurity";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Development />}/>
          <Route path="/services/cybersecurite" element={<CyberSecurity />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
