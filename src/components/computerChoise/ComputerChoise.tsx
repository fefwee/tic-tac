import React, { useEffect, useState } from 'react'
import DetailChoiceElement from '../detail-choice-element/DetailChoiceElement';

const ComputerChoise = ({ arr, sendDataToParent }: any,) => {
    const [random, setRandom] = useState(arr);


    useEffect(() => {
        const randomElement = arrayRandElement(arr);
            setRandom(randomElement);
    }, [])

    function arrayRandElement(array: any) {
        var rand = Math.floor(Math.random() * array.length);
        return array[rand];
    }

    useEffect(() => {
        sendDataToParent(random);
    }, [random])

    return (
        <div>
            <DetailChoiceElement
                color={random.color}
                choice={random.choice}
                image={random.image} />

            <div>

            </div>
        </div>
    )
}

export default ComputerChoise