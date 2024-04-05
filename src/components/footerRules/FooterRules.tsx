import React, { useContext, useReducer } from 'react';
import style from './style.module.css';
import { Context } from '../../context/Context';
import { changeGameType, initialState } from '../../reducer/reducer';

const FooterRules = () => {
  const [state, dispatch] = useReducer(changeGameType, initialState);
  const context = useContext(Context);


  return (
    <div style={{ marginRight: '20px' }}>
      <div className={style.block}>
        <button className={style.button_footer}
         onClick={() => dispatch({type:'BONUS'})}
         >{context.stateGameMode}</button>
      </div>
      <div>
        <button className={style.button_footer}>rules</button>
      </div>
    </div>
  )
}

export default FooterRules