import React, { useEffect, useState } from 'react';

import TodosLists from './TodosLists';

export default function ToDos({ supabase, selectedProject }) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    if (selectedProject) getTodos();
  }, [selectedProject]);

  async function getTodos() {
    const { data } = await supabase
      .from('Todos')
      .select()
      .eq('ProjectID', `${selectedProject.ProjectID}`);
    setTodos(data);
  }

  return (
    <div className="w-4/5 bg-background rounded m-2 flex flex-col items-center justify-around">
      {selectedProject ? (
        <>
          <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary inline">
            {selectedProject.Name}
          </h2>
          <TodosLists todos={todos} />
        </>
      ) : (
        <h2 className='text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary inline'>You haven't selected any project yet :)</h2>
      )}
    </div>
  );
}
