import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChoiceGame } from '../choice-game/ChoiceGame';
import { Count } from '../count/Count';
import SingleChoiceElement from '../singleChoiceElement/SingleChoiceElement';
import { initialState } from '../../reducer/reducer';
import { Context } from '../../context/Context';

const Main = () => {

  const context = useContext(Context);
  const [state, setState] = useState<any>(initialState);
  
  useEffect(() => {

  }, [])



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