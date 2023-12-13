import React from 'react';
import ToDoListItem from './ToDoListItem';

export default function List({ header, listItems }) {
  return (
    <div className="w-1/2 h-full m-2 flex flex-col items-center">
      <h3 className="text-3xl text-secondary font-semibold mb-6">{header}</h3>
      <ul className="bg-secondary w-full h-4/5 rounded p-5">
        {listItems?.map(item => {
          return (
            <ToDoListItem
              key={item.TodoID}
              TodoID={item.TodoID}
              Content={item.Content}
              Status={item.Status}
            />
          );
        })}
      </ul>
    </div>
  );
}
