import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  let [score, setScore] = useState(0);

  function addToScore(addedPoint) {
    setScore(score + addedPoint);
  } 
  return (
    <div className="App">
      <h1>React a Mole</h1>
      <h2>Score {score}</h2>
      <div className='mole-mounds'>
      <MoleContainer addToScore={addToScore}/>
      </div>
    </div>
  );
}

export default App;
