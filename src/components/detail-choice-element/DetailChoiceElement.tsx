import React, { useEffect } from 'react';
import style from './style.module.css';

const DetailChoiceElement = ({ choice, color, image }: any) => {

  useEffect(() => {
  }, [choice])

  return (
    <div className={style.flex}>
      <div className={style.box_container}>
        <div className={style.general_container}>
          <div className={style.element_classic}>
            <div className={style.container}>
              <div className={style.firstBack}
                style={{
                  backgroundColor: `${color}`,
                }}>
                <div className={style.secondBack}>
                  <div className={style.backImage}>
                    <img src={`/assets/${image}`} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>

  )
}

export default DetailChoiceElement