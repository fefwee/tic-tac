import React, { useEffect, useState } from 'react';
import style from './style.module.css';

const DetailChoiceElement = ({random}: any) => {

  const [rand,setRand] = useState(random);

  useEffect(() => {
    setRand(random);
  }, [random,rand])

 return (
    <div className={style.flex}>
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