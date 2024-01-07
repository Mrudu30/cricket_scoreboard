import React, { useState } from 'react';

const App = () => {
  const [batsmanName, setBatsmanName] = useState('');
  const [runs, setRuns] = useState(0);
  const [batsmenList, setBatsmenList] = useState([]);
  const [sortBatsmen, setSortBatsmen] = useState(false);

  const [bowlerName, setBowlerName] = useState('');
  const [wickets, setWickets] = useState(0);
  const [bowlersList, setBowlersList] = useState([]);
  const [sortBowlers, setSortBowlers] = useState(false);

  const selectionSort = (dataList, key) => {
    const n = dataList.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (dataList[j][key] < dataList[minIndex][key]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements
        const temp = dataList[i];
        dataList[i] = dataList[minIndex];
        dataList[minIndex] = temp;
      }
    }

    return dataList;
  };

  const addBatsman = () => {
    if (batsmanName.trim() !== '') {
      const newBatsman = { name: batsmanName, runs: runs };
      setBatsmenList((prevList) => [...prevList, newBatsman]);
      setBatsmanName('');
      setRuns(0);
    }
  };

  const addBowler = () => {
    if (bowlerName.trim() !== '') {
      const newBowler = { name: bowlerName, wickets: wickets };
      setBowlersList((prevList) => [...prevList, newBowler]);
      setBowlerName('');
      setWickets(0);
    }
  };

  const sortBatsmenData = () => {
    const sortedBatsmen = selectionSort([...batsmenList], 'runs');
    setBatsmenList(sortedBatsmen);
    setSortBatsmen(true);
  };

  const sortBowlersData = () => {
    const sortedBowlers = selectionSort([...bowlersList], 'wickets');
    setBowlersList(sortedBowlers);
    setSortBowlers(true);
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
          onChange={(e) => setRuns(Number(parseInt(e.target.value)))}
        />
        <button onClick={addBatsman}>Add Batsman</button>
        <button onClick={sortBatsmenData}>Sort Batsmen</button>
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
          onChange={(e) => setWickets(Number(parseInt(e.target.value)))}
        />
        <button onClick={addBowler}>Add Bowler</button>
        <button onClick={sortBowlersData}>Sort Bowlers</button>
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
