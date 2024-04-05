import React, { FC, useContext, useEffect, useReducer } from 'react';
import style from './style.module.css';
import { changeGameType } from '../../reducer/reducer';
import ChoiseElement from '../choose-element/ChoiseElement';
import { Context } from '../../context/Context';

interface ChoiceGameProps {
    initialState: any;
}

const ChoiceGame: FC<ChoiceGameProps> = ({ initialState }: any) => {

    const context = useContext(Context);
    const setContextValue = useContext(Context)

    useEffect(() => {
        setContextValue.setCUrrentGame(initialState);
    }, [initialState])

    return (
        <div>

            {
                <ChoiseElement item={initialState} />
            }
        </div>
    )
}

export { ChoiceGame }