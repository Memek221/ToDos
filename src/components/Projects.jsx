import React, { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://nhosxomvujuwxmoutreu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ob3N4b212dWp1d3htb3V0cmV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1OTk3OTksImV4cCI6MjAxNzE3NTc5OX0.aZZhqp5QRAGXHYqzjj37UN678d2s5SrER6ApO67a5Uo'
);

export default function Projects() {
  const [projectsList, setProjectsList] = useState([]);

  console.log(projectsList);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data } = await supabase.from('Projects').select();
    setProjectsList(data);
  }

  return (
    <section className="w-1/5 flex flex-col gap-4 px-2 py-5">
      <button className="bg-accent text-text rounded cursor-pointer h-20 flex items-center justify-center">
        Creat New Project +
      </button>
      <div className="overflow-auto border-2  border-accent rounded p-2">
        <ul>
          {projectsList.map(project => {
            return (
              <li
                key={project.ProjectID}
                className="bg-secondary my-2 text-text rounded cursor-pointer h-20 flex items-center justify-center"
              >
                <button className='w-full h-full'>
                  <span>{project.Name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
