import Header from "@/components/header";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { addProject, listProject, updateProject } from "./api/project";
import ProjectCard from "./components/project-card";
import ProjectForm from "./components/project-form";
import { Button } from "./components/ui/button";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    listProject().then((projects) => {
      setProjects(projects);
    });
  }, []);

  async function handleAdd(newProject) {
    const project = await addProject(newProject);
    setProjects((p) => [...p, project]);
  }

  async function handleUpdate(id, attrs) {
    await updateProject(id, attrs);
    setProjects((projects) =>
      projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            ...attrs,
          };
        }
        return project;
      })
    );
  }

  return (
    <div>
      <Header />
      <div className="container max-w-screen-lg grid grid-cols-2 gap-5 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleUpdate={handleUpdate}
          />
        ))}

        <Popover>
          <PopoverTrigger asChild>
            <Button>
              <span className="mr-2">Add Project</span>
              <Plus />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ProjectForm handleAdd={handleAdd} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default App;
