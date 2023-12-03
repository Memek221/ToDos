import React, { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function ToDos({ selectedProject }) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getTodos();
  }, [selectedProject]);

  async function getTodos() {
    const { data } = await supabase
      .from('Todos')
      .select()
      .eq('ProjectID', `${selectedProject}`);
    setTodos(data);
  }

  return (
    <div className="w-4/5 bg-background rounded m-2">
      {selectedProject ? (
        <>
          <h2>{selectedProject}</h2>
          <ul>
            {todos?.map(todo => {
              return (
                <li key={todo.TodoID}>
                  <p>{todo.Content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <h2>You haven't selected any project yet :)</h2>
      )}
    </div>
  );
}
