import ProjectsLinkComponent from "./projectLinksComponent";
import { useEffect, useState } from "react";


const ProjectsInitialState = {
  projects:[{
    title:"project title",
    src:"source of image",
    techstack:["HTML","CSS","React"],
    id:0,
    describe:"",
    projectLink:"/some/valid/uri",
    projectCode:"/some/valid/uri"
  }]
}

const ProjectsList = () => {

  const [{projects}, setProjects] = useState(ProjectsInitialState);

  const fetchProjects = () => {
    fetch('./data/projects.json')
    .then(response => response.json())
    .then(projectsList => {
      setProjects(projectsList);  
    })
    .catch(error => console.log(`Heare is a problem: ${error}`))
  }

  useEffect(()=>{
    fetchProjects()
  },[])


  const projectsList = projects.map(project => {
    return (
        <li className="project" key={project.id}>
            <div className="project__top">
              <div className="project__image">
                <img src={project.src} alt={project.title} />
              </div>
            </div>
            <div className="project__bottom">
              <p className="project__title">{project.title}</p>
              <p className="project__describe">{project.describe}</p>
              <ul className="project__tech-list">
                {project.techstack.map((item, index) => {
                  return (
                    <li className="describe__item" key={index}>{item}</li>
                  )}
                  )}
              </ul>
            </div>
            <ProjectsLinkComponent 
                projectLink = {project.projectLink} 
                projectCode = {project.projectCode} 
              />  
        </li>
      )
  })

  return (
    <ul className="projects__list">
      {projectsList}
    </ul>
  )
}

export default ProjectsList;