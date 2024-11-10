import '../App.css';
import Header from '../components/Header';
import Links from '../components/Links';

function WeeklySnapshots() {
  return (
    <>
        <Header /> 
        <div id="hero">
            <main class="weekly-snapshots">
                <h1>Weekly Snapshots</h1>
                <h3>Week 2:</h3>
                <img id="snapshots-image" src='./week2.png' alt='week 2 snapshot' />
                <h3>Week 3:</h3>
                <img id="snapshots-image" src='./week3.png' alt='week 3 snapshot' />
                <h3>Week 4:</h3>
                <img id="snapshots-image" src='./week4.png' alt='week 4 snapshot' />
                <h3>Week 5:</h3>
                <img id="snapshots-image" src='./week5.png' alt='week 5 snapshot' />
                <h3>Consolidation Week:</h3>
                <img id="snapshots-image" src='./week5.1.png' alt='week 5.1 snapshot' />
                <h3>Week 6:</h3>
                <img id="snapshots-image" src='./week6.png' alt='week 6 snapshot' />
            </main>
            <Links />
        </div>  
    </>
  );
}

export default WeeklySnapshots;
