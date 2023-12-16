import React, { useEffect, useState } from 'react';
import { useSupabase } from '../contexts/SupabaseContext';

export default function Projects({ onSetSelectedProject }) {
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const supabase = useSupabase();

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

  function handleButtonClick(project) {
    setSelectedProject(project);
  }

  return (
    <section className="w-1/5 flex flex-col gap-4 px-2 py-5">
      <button type='button' className="bg-accent text-dark rounded cursor-pointer h-20 flex items-center justify-center">
        Creat New Project +
      </button>
      <div className="overflow-auto border-2  border-accent rounded p-2">
        <ul>
          {projectsList.map(project => {
            return (
              <li
                key={project.ProjectID}
                className="bg-secondary my-2 text-dark rounded cursor-pointer h-20 flex items-center justify-center"
              >
                <button
                  onClick={() => handleButtonClick(project)}
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
