import React from 'react';
import style from './style.module.css'

const Modal = ({ isOpen, onClose, children }:any) => {
    if (!isOpen) return null;
  
    return (
      <div className={style.modalOverlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

export default Modal