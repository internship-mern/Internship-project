import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Home/>
      </main>
    </div>
  );
}

export default App;
