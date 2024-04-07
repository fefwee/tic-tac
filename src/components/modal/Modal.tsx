import React, { FC, ReactNode } from 'react';
import style from './style.module.css'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
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