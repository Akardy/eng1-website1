import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Links from "./components/Links";

function App() {
  return (
    <>
        <Header /> 
        <div id="hero">
            <main class="middle">
                <img id="coffee" src="./coffee.png" alt="a cafe building" />
                <div className='middle-text'>
                    <h1>University Simulation!</h1>
                    <p>Design your ideal university campus in just 5 minutes! Make it fun and an exciting place for students!</p>
                </div>
            </main>
            <Links />
        </div>  
    </>
  );
}

export default App;
