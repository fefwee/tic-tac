import React, { useEffect, useState } from 'react';
import './App.css';
import { Count } from './components/count/Count';
import { Context } from './context/Context';
import Main from './components/main/Main';
import FooterRules from './components/footerRules/FooterRules';
import Modal from './components/modal/Modal';
import { Router, Routes } from 'react-router-dom';

function App() {

  const [currentGame, setCUrrentGame] = useState([]);
  const [count, setCount] = useState<number>(0);
  const [winner, setWinner] = useState<string>('');
  const [stateGameMode, setStateGAmeModel] = useState<string>('CLASSIC');
  const value = {
    currentGame,
    setCUrrentGame,
    count,
    setCount,
    stateGameMode,
    setStateGAmeModel,
    winner,
    setWinner
  } 
  return (
    <Context.Provider value={value}>
      <div className="App">
        <div className='count'>
          <Count count={count}/>
        </div>
        <div>
          <Main />
        </div>
        <div className='footer_rules'>
          <FooterRules/>
        </div>
      </div>
    </Context.Provider>
  );
}
export default App;
