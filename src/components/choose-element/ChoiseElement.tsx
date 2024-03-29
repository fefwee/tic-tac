import React from 'react';
import style from './style.module.css';

const ChoiseElement = (props: any) => {
    


    return (
        <div className={style.box_container}>
  <div className={style.general_container} style={{backgroundImage:'url(/assets/bg-triangle.svg)'}}>

{
    props.item.map((item: any,index:any) => {
        return (
            <div className={`${style.element_container}`} >
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
    })
}
</div >
        </div>
      
    )
}

export default ChoiseElement