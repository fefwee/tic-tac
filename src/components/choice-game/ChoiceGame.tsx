import React, { FC, useContext, useEffect, useReducer } from 'react';
import style from './style.module.css';
import { changeGameType, initialState } from '../../reducer/reducer';
import ChoiseElement from '../choose-element/ChoiseElement';
import { Context } from '../../context/Context';


const ChoiceGame: FC = ({ choise }: any) => {

    const [state, dispatch] = useReducer(changeGameType, initialState);
    const setContextValue = useContext(Context)

    useEffect(()=>{
        setContextValue.setCUrrentGame(state)
    },[state])

    return (
        <div>
     {/* {       <button  onClick={() => dispatch({ type: 'BONUS' })}>click</button>} */}
     {       <button  onClick={() => dispatch({ type: 'BONUS' })}>click</button>}
            {
                <ChoiseElement item={state}  />
            }
        </div>
    )
}

export { ChoiceGame }