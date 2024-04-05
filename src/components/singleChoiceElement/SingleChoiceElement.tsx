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
  const [single, setSingle] = useState<any>({});
  const [result, setResult] = useState<any>('');
  const [count,setCount] = useState(0)
  const navigate = useNavigate();
  const { id } = useParams();


  const userChoice = (data: any, id: any) => {
    console.log(data)
    if (data) {
      const dat = data.filter((item: any) => item.id === Number(id));
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


  const handleDataFromChild = (data: any) => {
    if (JSON.stringify(data) !== '{}') {
      userChoice(singleState, id);
      setDataFromChild(data);
    }
  };


  const redirectAgainGame = () => {
    navigate('/')
  }

  function handleUserChoice(choice: any, computer: any) {
    console.log(choice, computer)
    const choices: string[] = ['rock', 'scissors', 'paper', 'spock', 'lizard'];
    const rules: any = {
      'rock': ['scissors', 'lizard'],
      'scissors': ['paper', 'lizard'],
      'paper': ['rock', 'spock'],
      'spock': ['scissors', 'rock'],
      'lizard': ['paper', 'spock']
    };

    if (choice.choice === computer.choice) {
      console.log('Ничья!');
    } else if (rules[choice.choice].includes(computer.choice)) {
      console.log('Вы выиграли!');
      context.setCount((count:any) => count +1 );
    
    } else {
      console.log(count)
      context.setCount((count:any) => { 
        if(count === 0){
          return count
        }
        return count -1});

      console.log('Компьютер выиграл!');
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
