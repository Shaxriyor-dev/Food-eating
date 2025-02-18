import "./App.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Notfaund from "./pages/Notfound.jsx";
import Home from "./components/Home.jsx";
import Valiater from "../src//pages/Valiater.jsx";
import Card from "../src//pages/Card.jsx";
import NotFound from "../src/pages/Notfound.jsx";
import Layout from "./components/Layout.jsx";
import { Route, Routes } from "react-router";
import Createcard from "./components/Createcard.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card" element={ <Layout><Card /></Layout>} />
        <Route path="/valiater" element={<Layout><Valiater /></Layout>} />
        <Route path="*" element={<NotFound />} />
         <Route path="/create" element={<Layout><Createcard/></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
