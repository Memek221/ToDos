import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Modal({ open, label, type, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    open ? dialog.current.showModal() : dialog.current.close();
  }, [open]);

  const handleBackdropClick = e => {
    if (e.target === dialog.current) {
      onClose();
    }
  };

  return createPortal(
    <dialog
      ref={dialog}
      onClick={handleBackdropClick}
      className="felx flex-col z-20 justify-center items-center text-accent bg-background w-2/6 h-2/6 m-auto backdrop:bg-black/40 backdrop:z-10 backdrop:fixed rounded relative"
    >
      <button
        className="absolute top-0 right-2"
        type="button"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '2em' }} />
      </button>
      <label>{label}</label>
      <input type={type} />
    </dialog>,
    document.getElementById('modal')
  );
}
