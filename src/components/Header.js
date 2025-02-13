import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
        <header> 
            <nav>
                <ul>
                    <img id="logo" src="./coffee.png" alt="a cafe building" />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/design">Design Process</Link></li>
                    <li><Link to="/weekly">Weekly Snapshots</Link></li>
                </ul>
            </nav>
            <a id="download" href="/UniSim.jar" target="_blank" rel="noreferrer">Download the Game</a>
        </header>     
  );
}

export default Header;
