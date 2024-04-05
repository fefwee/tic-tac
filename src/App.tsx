import React, { useEffect, useState } from 'react';
import './App.css';
import { Count } from './components/count/Count';
import { Context } from './context/Context';
import Main from './components/main/Main';
import FooterRules from './components/footerRules/FooterRules';
import Modal from './components/modal/Modal';

function App() {

  const [currentGame, setCUrrentGame] = useState([]);
  const [count, setCount] = useState(0);
  const [stateGameMode, setStateGAmeModel] = useState('CLASSIC');
  const value = {
    currentGame,
    setCUrrentGame,
    count,
    setCount,
    stateGameMode,
    setStateGAmeModel
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
