import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function ToDoListItem({TodoID, Content, Status}) {
  return (
    <li
      className="group bg-accent text-white m-4 p-5 rounded flex justify-between"
      key={TodoID}
    >
      {Content}
      <div className="flex gap-4">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center">
          <FontAwesomeIcon
            icon={Status ? faXmark : faCheck}
            color={Status ? 'red' : 'green'}
            style={{ fontSize: '1.5em' }}
          />
        </button>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-700">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}
