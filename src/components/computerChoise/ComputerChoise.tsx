import React, { useContext, useEffect, useState } from 'react'
import DetailChoiceElement from '../detail-choice-element/DetailChoiceElement';
import { Context } from '../../context/Context';

const ComputerChoise = ({getRandom}:any) => {

    const context = useContext(Context)
    const [random, setRandom] = useState<any>(context.currentGame.tasc);
    const [randEl, setRandEl] = useState<any>(null);


    useEffect(() => {
        setRandom(context.currentGame); 
        const rand = randonElement(random);
        getRandom(rand);
        
    }, [])

  
    const randonElement = (data: any) => {
        const rand = Math.floor(Math.random() * data.length);
        const randomData = data[rand];
        setRandEl(randomData);
        return randomData;
    }

    return (
        <div>
            <DetailChoiceElement   random = {randEl} />
          
            <div>  
            </div>
        </div>
    )
}

export default ComputerChoise