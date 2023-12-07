import React, { useEffect, useState } from 'react';

import TodosList from './TodosList';

export default function ToDos({supabase, selectedProject }) {
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
    <div className="w-4/5 bg-background rounded m-2">
      {selectedProject ? (
        <>
          <h2>{selectedProject.Name}</h2>
          <TodosList todos={todos} />
        </>
      ) : (
        <h2>You haven't selected any project yet :)</h2>
      )}
    </div>
  );
}
