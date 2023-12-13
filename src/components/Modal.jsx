import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const modalElement = document.getElementById('modal');

export default function Modal({ label, type, onClose }) {
  useEffect(() => {
    function handleEscPressed(e) {
      if (e.keyCode == 27) onClose();
    }

    window.addEventListener('keydown', handleEscPressed);

    return () => window.removeEventListener('keydown', handleEscPressed);
  }, []);

  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, modalElement)}
      {createPortal(
        <ModalOverlay label={label} type={type} onClose={onClose} />,
        modalElement
      )}
    </>
  );
}

function Backdrop({ onClose }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-10 bg-black/40"
      onClick={onClose}
    />
  );
}

function ModalOverlay({ label, type, onClose }) {
  return (
    <div
      className="fixed flex flex-col gap-5 items-center justify-center z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent bg-light w-2/6 h-2/6 m-auto backdrop:bg-black/40 rounded"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-0 right-2"
        type="button"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} style={{ fontSize: '2em' }} />
      </button>
      <label className="text-4xl " htmlFor="input">
        {label}
      </label>
      <input className="text-3xl rounded" id="input" type={type} />
      <button className='text-light text-xl bg-accent rounded px-5 py-2 mt-5' type="button">Add Todo</button>
    </div> 
  );
}
