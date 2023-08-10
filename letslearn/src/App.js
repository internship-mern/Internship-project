import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Protut from "./components/Protut";
import Chat from "./components/Chat";
import Python from "./components/Python";
import Ctut from "./components/Ctut";
import Java from "./components/Java";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Protut/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
