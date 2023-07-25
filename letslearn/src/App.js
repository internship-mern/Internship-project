import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './components/Home';
import Footer from './components/Footer';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Home/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
