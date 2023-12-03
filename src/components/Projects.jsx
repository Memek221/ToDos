import React, { useEffect, useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function Projects({ onSetSelectedProject }) {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const { data } = await supabase.from('Projects').select();
    setProjectsList(data);
  }

  useEffect(() => {
    onSetSelectedProject(selectedProject);
  }, [selectedProject]);

  function handleButtonClick(projectId) {
    setSelectedProject(projectId);
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
                <button
                  onClick={() => handleButtonClick(project.ProjectID)}
                  className="w-full h-full"
                >
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
