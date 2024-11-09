import '../App.css';

function Header() {
  return (
        <header> 
            <nav>
                <ul>
                    <img id="logo" src="./coffee.png" />
                    <li><a href="./">Home</a></li>
                    <li><a href="./team">Team</a></li>
                    <li><a href="./team">Credits</a></li>
                </ul>
            </nav>
            <button>Download the Game</button>
        </header>     
  );
}

export default Header;
