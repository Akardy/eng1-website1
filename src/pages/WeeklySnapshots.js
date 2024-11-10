import '../App.css';
import Header from '../components/Header';
import Links from '../components/Links';

function WeeklySnapshots() {
  return (
    <>
        <Header /> 
        <div id="hero">
            <main class="weekly-snapshots">
                <h1>Weekly Snapshots:</h1>
                <img id="snapshots-image" src='./weekly.png' alt='weekly snapshots' />
            </main>
            <Links />
        </div>  
    </>
  );
}

export default WeeklySnapshots;
