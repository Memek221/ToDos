import React, { useEffect, useState } from 'react';
import List from './List';
import Modal from './Modal';

export default function TodosLists({ todos }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          type="text"
          label="Todo content"
          onClose={() => setModalIsOpen(false)}
        />
      )}

      <div className="flex flex-col w-4/5 h-4/5 rounded justify-around p-4 bg-accent">
        <div className="flex h-4/5">
          <List header="Completed Tasks" listItems={todos?.filter(todo => todo.Status)} />
          <List header="Uncompleted Tasks" listItems={todos?.filter(todo => !todo.Status)} />
        </div>
        <button
          onClick={() => setModalIsOpen(true)}
          type="button"
          className="w-full bg-secondary text-dark rounded p-6"
        >
          Add New Task +
        </button>
      </div>
    </>
  );
}
