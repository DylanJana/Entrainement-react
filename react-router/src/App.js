import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import Error404 from "./Components/Error404/Error404";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
