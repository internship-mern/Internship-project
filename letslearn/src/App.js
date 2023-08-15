import { Route, Routes } from "react-router-dom";
import "./App.css";
import Files from "./components/Files";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Protut from "./components/Protut";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Ai } from "./components/Ai";
import Bc from "./components/Bc";
import Bs from "./components/Bs";
import Cn from "./components/Cn";
import Dt from "./components/Dt";
import Me from "./components/Me";
import Rpa from "./components/Rpa";
import Ctut from "./components/Ctut";
import Python  from "./components/Python"
import Java from "./components/Java"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/bc" element={<Bc />} />
          <Route path="/bs" element={<Bs />} />
          <Route path="/cn" element={<Cn />} />
          <Route path="/dt" element={<Dt />} />
          <Route path="/me" element={<Me />} />
          <Route path="/rpa" element={<Rpa />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/lectures" element={<Quiz />} />
          <Route path="/files" element={<Files />} />
          <Route path="/protut" element={<Protut />} />
          <Route path="/ctut" element={<Ctut/>} />
          <Route path="/python" element={<Python/>} />
          <Route path="/java" element={<Java/>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/lod" element={<Quiz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
