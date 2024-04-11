import React, { FC, useContext} from 'react';
import style from './style.module.css';
import { Context } from '../../context/Context';

type CountProps = {
    count: number;
}

const Count: FC<CountProps> = ({ count }) => {


    const context = useContext(Context);


    return (
        <div className={style.container}>
            <div className={style.wrapperContainer}>
                <div className={style.logo}><img src={context.currentGame.type === 'classic' ? '/assets/logo.svg'
                    : context.currentGame.type === 'bonus' ? '/assets/logo-bonus.svg' :
                        undefined} alt="" /></div>
                <div className={style.count}>
                    <ul className={style.countList}>
                        <li className={style.countTitle}>Счет</li>
                        <li className={style.currentCount}>{count}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Count }