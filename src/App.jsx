import Header from "@/components/header";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Plus } from "lucide-react";
import ProjectCard from "./components/project-card";
import ProjectForm from "./components/project-form";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Header />
      <div className="container max-w-screen-lg grid grid-cols-2 gap-5 mt-10">
        <ProjectCard
          name="My Cool Project"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, exercitationem. En"
          colors={["#4d0000", "#ff0040", "#0000ff"]}
        />
        <ProjectCard
          name="My Cool Project"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, exercitationem. En"
          colors={["#4d0000", "#ff0040", "#0000ff"]}
        />
        <ProjectCard
          name="My Cool Project"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, exercitationem. En"
          colors={["#4d0000", "#ff0040", "#0000ff"]}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button>
              <span className="mr-2">Add Project</span>
              <Plus />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <ProjectForm />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default App;
