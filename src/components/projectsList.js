import { useEffect, useState } from "react";

const ProjectsInitialState = {
  projects:[{
    title:"project title",
    src:"source of image",
    techstack:["HTML","CSS","React"],
    id:0,
    projectLink:"/some/valid/uri",
    projectCode:"/some/valid/uri"
  }]
}

const ProjectsList = () => {

  const [{projects}, setProjects] = useState(ProjectsInitialState);

  console.log(projects)

  const projectsList = projects.map(project => {
    return (
        <li className="projects__item" key={project.id}>
          <img className="projects__preview-img" src={project.src} alt={project.title} />
          <div className="projects__describe">
            <h3 className="describe__title">{project.title}</h3>
            <ul className="projects__tech-list">
            {project.techstack.map((item, index) => {
              return (
                <li className="describe__item" key={index}>{item}</li>
              )}
              )}
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
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