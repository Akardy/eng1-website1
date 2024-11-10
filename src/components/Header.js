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
            <button>Download the Game</button>
        </header>     
  );
}

export default Header;
