import React from "react"
import Projects from "./components/Projects"
import ToDos from "./components/ToDos"

import projects from './data/projects.json';

function App() {
  return (
    <div className="flex flex-col h-screen bg-primary">
      <header className="h-1/6 w-full flex items-center px-8">
        <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary inline">ToDos</h1>
      </header>
      <div className="flex w-full h-5/6">
        <Projects projects={projects}/>
        <ToDos/>
      </div>
    </div>
  )
}

export default App
