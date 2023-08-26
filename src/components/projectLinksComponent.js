const ProjectsLinkComponent = ({projectLink, projectCode}) => {
  return (
    <>
      <a className="btn" href={projectLink}>view projects</a>
      <a className="btn" href={projectCode}>view code</a>
    </>
  )
}

export default ProjectsLinkComponent