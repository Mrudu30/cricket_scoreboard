import React, { useState } from 'react';
import bubbleSort from './bubbleSort';
import mergeSort from './mergeSort';
import insertionSort from './insertionSort';
import selectionSort from './selectionSort';
import './App.css';

const App = () => {
  //========== hook useage ==========
  const [batsmanName, setBatsmanName] = useState('');
  const [runs, setRuns] = useState('');
  const [batsmenList, setBatsmenList] = useState([]);

  const [bowlerName, setBowlerName] = useState('');
  const [wickets, setWickets] = useState('');
  const [bowlersList, setBowlersList] = useState([]);

  const [calculated_run,setcalculated_run]=useState(1800);
  const [calculated_wickets,setcalculated_wickets]=useState(10);

// ========= Sort Implementation ==========
  const sortBatsmenData = () => {
    const sortedBatsmen = selectionSort([...batsmenList], 'runs');
    setBatsmenList(sortedBatsmen);
  };

  const sortBowlersData = () => {
    const sortedBowlers = insertionSort([...bowlersList], 'wickets');
    setBowlersList(sortedBowlers);
  };

  const reverseBattingOrder = () => {
    const reversedBattingOrder = bubbleSort([...batsmenList], 'runs');
    setBatsmenList(reversedBattingOrder);
  };

  const reverseBowlingOrder = () => {
    const reversedBowlingOrder = mergeSort([...bowlersList], 'wickets');
    setBowlersList(reversedBowlingOrder);
  };

  // ========== Adding to the batsman list ===========
  const addBatsman = () => {
    
    setcalculated_run(calculated_run-runs);
    if (batsmenList.length < 11) {
      if (batsmanName.trim() !== '') {
        const newBatsman = { name: batsmanName, runs: runs };
        if(calculated_run >= 0 )
        {
          setBatsmenList((prevList) => [...prevList, newBatsman]);
        }
        else
        {
          alert("score is exced");
        }
        setBatsmanName('');
        setRuns(0);
        // console.log(batsmenList);
      }
    } 
    else {
      alert('You can only have a maximum of 11 players in the team.');
    }
  };

  const addBowler = () => {
    setcalculated_wickets(calculated_wickets-wickets);
    if (bowlersList.length < 11) {
      if (bowlerName.trim() !== '') {
        const newBowler = { name: bowlerName, wickets: wickets };
        if(calculated_wickets > 0)
        {
          setBowlersList((prevList) => [...prevList, newBowler]);
        }
        else
        {
          alert("wickets exced");
        }
        setBowlerName('');
        setWickets(0);
        console.log(bowlersList);
      }
    } else {
      alert('You can only have a maximum of 11 players in the team.');
    }
  };

// ========== Html Main Page =========
  return (
    <div className="bg">
    <head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    


    <div className='container'>
      <h1 className='headings'>-: Cricket ScoreBoard :-</h1>

      <div className='maindiv'>
      {/* ======= Batsmen input ========= */}
      <div className='batsman'>
        <h2>Batsmen Details</h2>
        <label>Batsman Name:</label>
        <input
          type='text'
          value={batsmanName}
          onChange={(e) => setBatsmanName(e.target.value)}
          className='form-control'
          placeholder='ENTER  BATSMAN NAME'
        />
        <label>Runs Scored:</label>
        <input
          type='text'
          value={runs}
          onChange={(e) => setRuns(parseInt(e.target.value))}
          className='form-control'
          placeholder='ENTER RUN SCORED BY BATSMAN'
        />
        <button onClick={addBatsman} className='btn btn-primary mt-2'>
          Add Batsman
        </button>
        <button onClick={sortBatsmenData} className='btn btn-info mt-2'>
          Sort Batsmen(ASC)
        </button>
        <button onClick={reverseBattingOrder} className='btn btn-primary mt-2'>
          Sort Batsman(DSC)
        </button>

        <div className='cricket-table'>
        {/* ========= Batsmen List ========= */}
        <div className='table-container'>
          <h2>Batsmen List:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Runs</th>
              </tr>
            </thead>
            <tbody>
              {batsmenList.map((batsman, index) => (
                <tr key={index}>
                  <td>{batsman.name}</td>
                  <td>{batsman.runs}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
          
        </div>

      </div>
      </div>

      {/*========= Bowlers input =========*/}
      <div className='bowler'>
        <h2 className='h2'>Bowlers Details</h2>
        <label>Bowler Name:</label>
        <input
          type='text'
          value={bowlerName}
          onChange={(e) => setBowlerName(e.target.value)}
          className='form-control'
          placeholder='ENTER BOWLER NAME'
        />
        <label>Wickets Taken:</label>
        <input
          type='text'
          value={wickets}
          onChange={(e) => setWickets(parseInt(e.target.value))}
          className='form-control'
          placeholder='ENTER WICKET TAKEN BY BOWLER'
        />
        <button onClick={addBowler} className='btn btn-primary mt-2' >
          Add Bowler
        </button>
        <button onClick={sortBowlersData} className='btn btn-info mt-2'>
          Sort Bowlers(ASC)
        </button>
        <button onClick={reverseBowlingOrder} className='btn btn-primary mt-2'>
        Sort Bowlers(DSC)
        </button>
      
        {/*========= Bowlers List =========*/}
        <div className='table-container'>
          <h2>Bowlers List:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Wickets</th>
              </tr>
            </thead>
            <tbody>
              {bowlersList.map((bowler, index) => (
                <tr key={index}>
                  <td>{bowler.name}</td>
                  <td>{bowler.wickets}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
          
        </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default App;