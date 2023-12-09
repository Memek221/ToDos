import React, { useEffect, useState } from 'react';
import List from './List';

export default function TodosLists({ todos }) {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [uncompletedTodos, setUncompletedTodos] = useState([]);

  useEffect(() => {
    setCompletedTodos(todos?.filter(todo => todo.Status));
    setUncompletedTodos(todos?.filter(todo => !todo.Status));
  }, [todos]);

  return (
    <div className="flex flex-col w-4/5 h-4/5 rounded justify-around p-4 bg-accent">
      <div className='flex h-4/5'>
        <List header="Completed Tasks" listItems={completedTodos} />
        <List header="Uncompleted Tasks" listItems={uncompletedTodos} />
      </div>
      <button type='button' className="w-full bg-secondary text-text rounded p-6">Add New Task +</button>
    </div>
  );
}
