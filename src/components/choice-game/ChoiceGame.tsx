import React, { FC, useEffect, useReducer } from 'react';
import style from './style.module.css';
import { changeGameType, initialState } from '../../reducer/reducer';
import ChoiseElement from '../choose-element/ChoiseElement';


const ChoiceGame: FC = ({ choise }: any) => {

    const [state, dispatch] = useReducer(changeGameType, initialState);

    useEffect(()=>{
        console.log(state)
    },[state])

    return (
        <div>
            <button  onClick={() => dispatch({ type: 'BONUS' })}>click</button>
          
            {
                <ChoiseElement item={state}  />
            }
        </div>
    )
}

export { ChoiceGame }