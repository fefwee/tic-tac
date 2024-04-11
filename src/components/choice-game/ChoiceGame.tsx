import React, { FC, useContext, useEffect, useReducer } from 'react';
import style from './style.module.css';
import ChoiseElement from '../choose-element/ChoiseElement';
import { Context } from '../../context/Context';
import { FullGameValue, GameValue, VariantGame } from '../../types/gameType';

type ChoiceGameProps = {
    initialState: GameValue;
}

const ChoiceGame: FC<ChoiceGameProps> = ({ initialState }) => {
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