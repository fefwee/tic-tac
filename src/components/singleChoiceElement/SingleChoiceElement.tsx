import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import ComputerChoise from "../computerChoise/ComputerChoise";
import DetailChoiceElement from "../detail-choice-element/DetailChoiceElement";
import style from './style.module.css'
import { GameValue, VariantGame } from "../../types/gameType";

const SingleChoiceElement:FC = () => {

  const context = useContext(Context);
  const [singleState, setSingleState] = useState<VariantGame[]>(context.currentGame.tasc);
  const [dataFromChild, setDataFromChild] = useState<VariantGame>({} as VariantGame);
  const [single, setSingle] = useState<VariantGame>({} as VariantGame);
  const [result, setResult] = useState<string>('');
  const [count, setCount] = useState<number>(0)
  const navigate = useNavigate();
  const { id } = useParams<string>();


  const userChoice = (data: VariantGame[], id: string | undefined) => {
    console.log(data);
    if (data) {
      const dat = data.filter((item: VariantGame) => item.id === Number(id));
      setSingle(dat[0]);
      return dat;
    } else {
      return [];
    }
  }



  useEffect(() => {
    if (Object.keys(single).length !== 0) {
      handleUserChoice(single, dataFromChild);
    }
  }, [single, dataFromChild])

  if (!singleState) {
    return <div>Вернитесь на главную</  div>;
  }


  const handleDataFromChild = (data: VariantGame) => {
    if (JSON.stringify(data) !== '{}') {
      userChoice(singleState, id);
      console.log(data)
      setDataFromChild(data);
    }
  };


  const redirectAgainGame = () => {
    navigate('/')
  }

  function handleUserChoice(choice:VariantGame, computer: VariantGame) {
    console.log(choice, computer)
    const choices: string[] = ['rock', 'scissors', 'paper', 'spock', 'lizard'];
    const rules:{[key: string]: string[]} = {
      'rock': ['scissors', 'lizard'],
      'scissors': ['paper', 'lizard'],
      'paper': ['rock', 'spock'],
      'spock': ['scissors', 'rock'],
      'lizard': ['paper', 'spock']
    };

    if (choice.choice === computer.choice) {
      setResult('Ничья!');
    } else if (rules[choice.choice].includes(computer.choice)) {
      setResult('Вы выиграли!');
      context.setCount((count:number) => count + 1);

    } else {
      context.setCount((count: number) => {
        if (count === 0) {
          return count
        }
        return count - 1
      });

      setResult('Компьютер выиграл!');
    }
  };

  return <div>
    <div className={style.flex}>
      <div className={style.boxElement}>
        <h2>Вы выбрали</h2>
        <div>
          <DetailChoiceElement random={single} />
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
            getRandom={handleDataFromChild}
          />
        </div>
      </div>
    </div>
  </div>;
};

export default SingleChoiceElement;
