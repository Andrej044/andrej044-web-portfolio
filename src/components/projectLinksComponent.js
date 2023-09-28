const ProjectsLinkComponent = ({projectLink, projectCode}) => {
  return (
    <div className="project__links-wrapper">
      <a className="btn" href={projectLink}>view project</a>
      <a className="btn" href={projectCode}>view code</a>
    </div>
  )
}

export default ProjectsLinkComponent