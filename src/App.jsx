import "./App.css";
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Notfaund from './pages/Notfound.jsx';
import Home from './components/Home.jsx';
import Valiater from "../src//pages/Valiater.jsx";
import Card from "../src//pages/Card.jsx";
import NotFound from "../src/pages/Notfound.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card" element={<Card />} />
        <Route path="/valiater" element={<Valiater />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
