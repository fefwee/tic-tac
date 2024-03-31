import React, { useEffect, useState } from 'react';
import './App.css';
import { Count } from './components/count/Count';
import { Context } from './context/Context';
import Main from './components/main/Main';

function App() {

  const [currentGame, setCUrrentGame] = useState([]);
  const [count, setCount] = useState(0);

  const value = {
    currentGame,
    setCUrrentGame,
    count,
    setCount
  } 
  useEffect(()=>{
    console.log(count)
  },[count])



  return (
    <Context.Provider value={value}>
      <div className="App">
        <div className='count'>
          <Count count={count}/>
        </div>
        <div>
          <Main />
        </div>
      </div>
    </Context.Provider>
  );
}
export default App;
