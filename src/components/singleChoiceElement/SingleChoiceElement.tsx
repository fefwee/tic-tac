import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import ComputerChoise from "../computerChoise/ComputerChoise";
import DetailChoiceElement from "../detail-choice-element/DetailChoiceElement";
import style from './style.module.css'

const SingleChoiceElement = () => {

  const context = useContext(Context);
  const [singleState, setSingleState] = useState<any>(context.currentGame.tasc);
  const [dataFromChild, setDataFromChild] = useState<any>([]);
  const [result, setResult] = useState<any>('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    handleChoice(filt[0].choice, dataFromChild.choice);
  }, [dataFromChild])

  if (!singleState) {
    return <div>Вернитесь на главную</div>;
  }

  const filt = singleState.filter((item: any) => item.id === Number(id));

  const handleDataFromChild = (data: any) => {
    setDataFromChild(data);
  };

  const redirectAgainGame = () => {
    navigate('/')
  }

  function handleChoice(choice: any, computerChoice: any) {
    if (choice === computerChoice) {
      setResult('Ничья')  
    }
    else if (
      (choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (choice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
      setResult('Вы выйграли');
    } else {
      setResult('Вы проиграли');
    }
  }


  

  return <div>
    <div className={style.flex}>
      <div className={style.boxElement}>
        <h2>Вы выбрали</h2>
        <div>
          <DetailChoiceElement
            color={filt[0].color}
            choice={filt[0].choice}
            image={filt[0].image} />
        </div>
      </div>
      <div className={style.textResult}>
        <div className={style.textResultBlock}>
          <h1>{result}</h1>
          <button onClick={redirectAgainGame}>Играть снова</button>
        </div>
      </div>
      <div className={style.boxElement}>
        <h2>Компьютер выбрал</h2>
        <div>
          <ComputerChoise
            arr={context.currentGame.tasc}
            sendDataToParent={handleDataFromChild}
          />
        </div>
      </div>
    </div>

  </div>;
};

export default SingleChoiceElement;
