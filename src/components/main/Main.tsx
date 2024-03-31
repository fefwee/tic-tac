import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChoiceGame } from '../choice-game/ChoiceGame';
import { Count } from '../count/Count';
import SingleChoiceElement from '../singleChoiceElement/SingleChoiceElement';

const Main = () => {
  return (
        <BrowserRouter>
            <div>
              <div>
              <Routes>
                <Route path="/" element={<ChoiceGame />}></Route>
                <Route path=":id" element={<SingleChoiceElement />}></Route>
              </Routes>
              </div>
            </div>
        </BrowserRouter>
      );
}

export default Main