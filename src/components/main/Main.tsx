import React, { FC, useContext, useEffect,useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChoiceGame } from '../choice-game/ChoiceGame';
import { Count } from '../count/Count';
import SingleChoiceElement from '../singleChoiceElement/SingleChoiceElement';
import { classicState, BonusState } from '../../reducer/reducer';
import { Context } from '../../context/Context';
import { GameValue } from '../../types/gameType';

const Main:FC = () => {

  const context = useContext(Context);
  const [state,setState] = useState<GameValue>(classicState)
  
  useEffect(()=>{
    if(context.stateGameMode === 'CLASSIC'){
      setState(classicState)
    }
    else if (context.stateGameMode === 'BONUS'){
      setState(BonusState)
    }
  },[context.stateGameMode])


  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<ChoiceGame initialState={state} />}></Route>
            <Route path=":id" element={<SingleChoiceElement />}></Route>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default Main