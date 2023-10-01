import GitHub from "../../components/socialMedia/gitHub";
import FrontEndMentor from "../../components/socialMedia/frontEndMentor";
import LinkedIn from "../../components/socialMedia/linkedIn";
import './Navigation.css';


const Navigation = ({section}) => {
  return(
    <nav className={`${section}-nav nav`}>
      <p>andrej044</p>
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="https://github.com/Andrej044" rel='noreferrer' target="_blank">
              <GitHub/>
          </a>
        </li>
        <li>
          <a className="nav__link" href="https://www.frontendmentor.io/profile/Andrej044" rel='noreferrer' target="_blank">
              <FrontEndMentor/>
          </a>
        </li>
        <li>
          <a className="nav__link" href="https://www.linkedin.com/in/andrii-lishchyna-951401247/" rel='noreferrer' target="_blank">
              <LinkedIn/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation