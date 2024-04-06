import React, { useContext, useReducer, useState } from 'react';
import style from './style.module.css';
import { Context } from '../../context/Context';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';

const FooterRules = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const context = useContext(Context);



  return (

    <div style={{ marginRight: '20px' }}>
      <div className={style.block}>
        <button className={style.button_footer}
          onClick={() => context.setStateGAmeModel(
            context.stateGameMode === 'BONUS' ?
              'CLASSIC' :
              (context.stateGameMode === 'CLASSIC' ?
                'BONUS' : false))}
        >{context.stateGameMode}</button>
      </div>
      <div>
        <button className={style.button_footer} onClick={openModal}>rules</button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <h1>Правила игры</h1>
            <div>
              {context.stateGameMode === 'CLASSIC' &&
                <div className={style.container}>
                  <img src="/assets/image-rules.svg" alt="" />
                  <ul>
                    <li>
                      Бумага побеждает камень
                    </li>
                    <li>
                      Камень побеждает ножницы
                    </li>
                    <li>
                      Ножницы побеждают бумагу
                    </li>
                  </ul>
                </div>
              }
              {context.stateGameMode === 'BONUS' &&
                <div className={style.container}>
                  <img src="/assets/image-rules-bonus.svg" alt="" />
                  <ul>
                    <li>
                      Ножницы побеждают бумагу
                    </li>
                    <li>
                      Бумага побеждает камень
                    </li>
                    <li>
                      Рок побеждает Ящерицу
                    </li>
                    <li>
                      Ящерица побеждает Спока
                    </li>
                    <li>
                      Спок побеждает Ножницы
                    </li>
                    <li>
                      Ножницы побеждают Ящерицу
                    </li>
                    <li>
                      Бумага побеждает Спока
                    </li>
                    <li>
                      Камень побеждает ножницы
                    </li>
                    <li>
                      Ящерица побеждает бумагу
                    </li>
                    <li>
                      Спок побеждает Рока
                    </li>
                  </ul>
                </div>
              }
            </div>

          </div>
        </Modal>
      </div>
    </div>
  )
}

export default FooterRules