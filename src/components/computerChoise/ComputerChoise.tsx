import React, { FC, useContext, useEffect, useState } from 'react'
import DetailChoiceElement from '../detail-choice-element/DetailChoiceElement';
import { Context } from '../../context/Context';
import { VariantGame } from '../../types/gameType';


type GetRandomProps = {
    getRandom:(e:VariantGame)=> void
    computer:any
}
const ComputerChoise:FC<GetRandomProps> = ({getRandom,computer}) => {
    const context = useContext(Context)
    const [random, setRandom] = useState<VariantGame[]>(context.currentGame.tasc);
    const [randEl, setRandEl] = useState<VariantGame | null>(null);


    useEffect(() => {
        setRandom(context.currentGame); 
        const rand = randonElement(random);
        getRandom(rand);
        
    }, [])

  
    const randonElement = (data:VariantGame[]) => {
        const rand = Math.floor(Math.random() * data.length);
        const randomData = data[rand];
        setRandEl(randomData);
        return randomData;
    }

    return (
        <div>
            <DetailChoiceElement   random = {randEl} 
            computer = {computer}
            />
                <div>  
            </div>
        </div>
    )
}

export default ComputerChoise