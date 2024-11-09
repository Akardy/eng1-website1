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
                    <li>Nora</li>
                    <li>Theo</li>
                    <li>Kaite</li>
                    <li>Mat</li>
                    <li>Jul</li>
                </ul>
            </main>
            <Links />
        </div>  
    </>
  );
}

export default Team;
