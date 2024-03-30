import React, { useEffect, useState } from 'react';
import style from './style.module.css';

const ChoiseElement = (props: any) => {
    console.log(props.item.tasc);
const selectBackground = () => {
    const types = props.item.type;
    switch (types) {
        case "classic":
           return  {backgroundImage:'url(/assets/bg-triangle.svg)'}
            break;
        case 'bonus':
           return  {backgroundImage:'url(/assets/bg-pentagon.svg)'}
            break;
            default:
            return  {backgroundImage:'url(/assets/bg-triangle.svg)'} 
    }
}
    return (
        <div className={style.box_container}>
  <div className={style.general_container} style={selectBackground()}>
{  props.item.tasc.map((item:any)=>{
       return (
        
        <div className={ props.item.type === 'classic' ? `${style.element_classic}`
         : props.item.type === 'bonus' ? `${style.element_bonus}` 
         : undefined }>
       <div className={`${style.container}`} key={item.id}>
            <div className={style.firstBack}
                style={{
                    backgroundColor: `${item.color}`,
                }}>
                <div className={style.secondBack}>
                    <div className={style.backImage}>
                        <img src={`/assets/${item.image}`} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}) }
</div >
        </div>
      
    )
}

export default ChoiseElement





