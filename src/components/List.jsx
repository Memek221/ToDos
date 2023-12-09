import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function List({ header, listItems }) {
  return (
    <div className="w-1/2 h-full m-2 flex flex-col items-center">
      <h3 className="text-3xl text-secondary font-semibold mb-6">{header}</h3>
      <ul className="bg-secondary w-full h-4/5 rounded p-5">
        {listItems?.map(item => {
          return (
            <li
              className="group bg-accent text-white m-4 p-5 rounded flex justify-between"
              key={item.TodoID}
            >
              {item.Content}
              <div className='flex gap-4'>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
                  <FontAwesomeIcon icon={item.Status ? faXmark : faCheck} color={item.Status ? 'red' : 'green'} style={{ fontSize: '1.5em' }}/>
                </button>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-700">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
