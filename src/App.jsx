import React, { useState } from "react"
import Projects from "./components/Projects"
import ToDos from "./components/ToDos"

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-col h-screen bg-primary">
      <header className="h-1/6 w-full flex items-center px-8">
        <h1 className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary inline">ToDos</h1>
      </header>
      <div className="flex w-full h-5/6">
        <Projects supabase={supabase} onSetSelectedProject = {setSelectedProject}/>
        <ToDos supabase={supabase} selectedProject = {selectedProject}/>
      </div>
    </div>
  )
}

export default App
