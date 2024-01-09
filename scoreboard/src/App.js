import React, { useState } from 'react';
// calling sort functions

// Descending Functions
import bubbleSort from './bubbleSort';
import mergeSort from './mergeSort';
// Ascending Functions
import insertionSort from './insertionSort';
import selectionSort from './selectionSort';

const App = () => {
  // hook useage
  const [batsmanName, setBatsmanName] = useState('');
  const [runs, setRuns] = useState('');
  const [batsmenList, setBatsmenList] = useState([]);
  const [sortBatsmen, setSortBatsmen] = useState(false);
  
  const [bowlerName, setBowlerName] = useState('');
  const [wickets, setWickets] = useState('');
  const [bowlersList, setBowlersList] = useState([]);
  const [sortBowlers, setSortBowlers] = useState(false);

  // Sorting Functions
  // Ascending
  const sortBatsmenData = () => {
    const sortedBatsmen = selectionSort([...batsmenList], 'runs');
    setBatsmenList(sortedBatsmen);
    setSortBatsmen(true);
  };

  const sortBowlersData = () => {
    const sortedBowlers = insertionSort([...bowlersList], 'wickets');
    setBowlersList(sortedBowlers);
    setSortBowlers(true);
  };

  // Descending
  const reverseBattingOrder = () => {
      const reversedBattingOrder = bubbleSort([...batsmenList],'runs');
      setBatsmenList(reversedBattingOrder);
      setSortBatsmen(true);
  }

  const reverseBowlingOrder = () =>{
      const reversedBowlingOrder = mergeSort([...bowlersList],'wickets');
      setBowlersList(reversedBowlingOrder);
      setSortBowlers(true)
  }

  // Adding Scores of Batsmen and Bowlers
  const addBatsman = () => {
    if(batsmenList.length<11){
      if (batsmanName.trim() !== '') {
        const newBatsman = { name: batsmanName, runs: runs };
        setBatsmenList((prevList) => [...prevList, newBatsman]);
        setBatsmanName('');
        setRuns(0);
        console.log(batsmenList)
      }}
    else 
      {
        alert("You can only have a maximum of 11 players in the team.");
      }
  };

  const addBowler = () => {
    if (bowlersList.length<11){
      if (bowlerName.trim() !== '') {
        const newBowler = { name: bowlerName, wickets: wickets };
        setBowlersList((prevList) => [...prevList, newBowler]);
        setBowlerName('');
        setWickets(0);
        console.log(bowlersList)
      }}
    else
      {
        alert("You can only have a maximum of 11 players in the team.");
      }  
  };

  return (
    <div>
      <h1>Cricket Scorer</h1>

      {/* Batsmen input */}
      <div>
        <h2>Batsmen Details</h2>
        <label>Batsman Name:</label>
        <input
          type='text'
          value={batsmanName}
          onChange={(e) => setBatsmanName(e.target.value)}
        />
        <label>Runs Scored:</label>
        <input
          type='text'
          value={runs}
          onChange={(e) => setRuns(parseInt(e.target.value))}
        />
        <button onClick={addBatsman}>Add Batsman</button>
        <button onClick={sortBatsmenData}>Sort Batsmen</button>
        <button onClick={reverseBattingOrder}>Reverse</button>
      </div>

      {/* Bowlers input */}
      <div>
        <h2>Bowlers Details</h2>
        <label>Bowler Name:</label>
        <input
          type='text'
          value={bowlerName}
          onChange={(e) => setBowlerName(e.target.value)}
        />
        <label>Wickets Taken:</label>
        <input
          type='text'
          value={wickets}
          onChange={(e) => setWickets(parseInt(e.target.value))}
        />
        <button onClick={addBowler}>Add Bowler</button>
        <button onClick={sortBowlersData}>Sort Bowlers</button>
        <button onClick={reverseBowlingOrder}>Reverse</button>
      </div>

      {/* Batsmen List */}
      <div>
        <h2>Batsmen List:</h2>
        <ul>
          {batsmenList.map((batsman, index) => (
            <li key={index}>
              {batsman.name} - Runs: {batsman.runs}
            </li>
          ))}
        </ul>
        {sortBatsmen && <p>Batsmen sorted!</p>}
      </div>

      {/* Bowlers List */}
      <div>
        <h2>Bowlers List:</h2>
        <ul>
          {bowlersList.map((bowler, index) => (
            <li key={index}>
              {bowler.name} - Wickets: {bowler.wickets}
            </li>
          ))}
        </ul>
        {sortBowlers && <p>Bowlers sorted!</p>}
      </div>
    </div>
  );
};

export default App;