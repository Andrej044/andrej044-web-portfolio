const ProjectsLinkComponent = ({projectLink, projectCode}) => {
  return (
    <div className="project__links-wrapper">
      <a className="btn" href={projectLink} rel='noreferrer' target="_blank">view project</a>
      <a className="btn" href={projectCode} rel='noreferrer' target="_blank">view code</a>
    </div>
  )
}

export default ProjectsLinkComponent