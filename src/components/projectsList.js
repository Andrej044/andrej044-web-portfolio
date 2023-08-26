import { useEffect, useState } from "react";

const ProjectsInitialState = {
  projects:[{
    title:"project title",
    src:"source of image",
    techstack:["HTML","CSS","React"],
    id:0
  }]
}

const ProjectsList = () => {

  const {projects, setProjects} = useState(ProjectsInitialState);
  return (
    <></>
  )
}

export default ProjectsList;