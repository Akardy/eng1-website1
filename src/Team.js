import './App.css';
import Header from './components/Header';
import Links from './components/Links';

function Team() {
  return (
    <>
        <Header /> 
            <div id="hero">
            <main class="team">
                <h1>Our Team</h1>
                <ul>
                    <li>Mohamed Eljak</li>
                    <li>Nora Wu</li>
                    <li>Theo Coleman</li>
                    <li>Katie Schilling</li>
                    <li>Matias Duplock</li>
                    <li>Juliet Urquhart</li>
                </ul>
            </main>
            <Links />
        </div>  
    </>
  );
}

export default Team;
