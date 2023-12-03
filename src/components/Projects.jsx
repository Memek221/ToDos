import React, {useState} from 'react';

export default function Projects({projects}) {
  const [projectsList, setProjectsList] = useState(projects)

  return (
    <section className="w-1/5 flex flex-col gap-4 px-2 py-5">
      <button className="bg-accent text-text rounded cursor-pointer h-20 flex items-center justify-center">
        Creat New Project +
      </button>
      <div className='overflow-auto border-2  border-accent rounded p-2'>
        <ul>
          {projectsList.projects.map((project, id) => {
            return (
              <li
                key={id}
                className="bg-secondary my-2 text-text rounded cursor-pointer h-20 flex items-center justify-center"
              >
                <span>{project.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
