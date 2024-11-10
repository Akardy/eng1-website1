import '../App.css';
import Header from '../components/Header';
import Links from '../components/Links';

function DesignProgress() {
  return (
    <>
        <Header /> 
          <div id="hero">
            <main class="design-progress">
              <h1>Design Progress</h1>
              <p>We developed structural diagrams to represent the architecture of UniSim, focusing on key
                components and their interactions. The diagrams were designed using Lucidchart, which
                provided collaborative features and allowed us to create customised UML diagrams
                effectively.
              </p>
              <img id="snapshots-image" src='./diagram1.png' alt='first diagram' />
              <h3>Initial Design (First Structural Diagram)</h3>
              <img id="snapshots-image" src='./diagram2.png' alt='second diagram' />
              <h3>Second Structural Diagram (Toward Modularity)</h3>
              <img id="snapshots-image" src='./diagram3.png' alt='final diagram' />
              <p>To read more about the project architecture, please check this document: 
                  <a href="https://drive.google.com/file/d/1dA1YFTi32XpJ2t2QN57JBeyop8NG_dXa/view?usp=sharing" target="_blank" rel="noreferrer"> Click here</a>
              </p>
            </main>
            <Links />
        </div>  
    </>
  );
}

export default DesignProgress;
