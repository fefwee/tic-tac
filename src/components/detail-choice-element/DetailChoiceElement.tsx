import React, { FC, useEffect, useState } from 'react';
import style from './style.module.css';
import { VariantGame } from '../../types/gameType';


type DetailChoiceElementProps = {
  random: VariantGame | null
  result: string | null
  computer: VariantGame | string | null
}
const DetailChoiceElement: FC<DetailChoiceElementProps> = ({ random, result, computer }) => {

  const [rand, setRand] = useState(random);


  useEffect(() => {
    setRand(random);
  }, [random, rand])

  return (
    <div className={`${style.flex} ${result === 'winner' ? 'shadow' : computer === 'winner1' ? 'shadow' : ''}`}>
      {rand && (
        <div className={style.box_container}>
          <div className={style.general_container}>
            <div className={style.element_classic}>
              <div className={style.container}>
                <div className={style.firstBack}
                  style={{
                    backgroundColor: `${rand.color}`,
                  }}>
                  <div className={style.secondBack}>
                    <div className={style.backImage}>
                      <img src={`/assets/${rand.image}`} alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailChoiceElement