import GitHub from "../../components/socialMedia/gitHub";
import FrontEndMentor from "../../components/socialMedia/frontEndMentor";
import LinkedIn from "../../components/socialMedia/linkedIn";


const Navigation = ({section}) => {
  return(
    <nav className={`${section}-nav`}>
      <p>andrej044</p>
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="/some/valid/uri">
              <GitHub/>
          </a>
        </li>
        <li>
          <a className="nav__link" href="/some/valid/uri">
              <FrontEndMentor/>
          </a>
        </li>
        <li>
          <a className="nav__link" href="/some/valid/uri">
              <LinkedIn/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation