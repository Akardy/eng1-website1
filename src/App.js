import './App.css';
import Header from './components/Header';
import Links from './components/Links';

function App() {
  return (
    <>
        <Header /> 
        <div id="hero">
            <main class="middle">
                <img id="coffee" src="./coffee.png" alt="a cafe building" />
                <div>
                    <h1>University Simulation!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis sapien non magna imperdiet, vitae sodales mauris iaculis.</p>
                </div>
            </main>
            <Links />
        </div>  
    </>
  );
}

export default App;
