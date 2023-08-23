import Section from "./Section";
import ProfilePhoto from "../components/profilePhoto";
import CircleSVG from "../components/svg/circleSVG";
import RingsSVG from "../components/svg/ringsSVG";

const Main = () =>{
  return(
  <main className="main">
    <h1 className="main-title visually-hidden">Web developer portfolio Andrii Lishchyna</h1>
    <Section name='intro' titleHidden={true} >
      <span className="decor__rings decor">
        <RingsSVG/>
      </span>
      <div className="intro__text">
        <p>Nice to <br className="intro__text--br-hidden"/> meet you! I'm <span className="text--underline">Andrii Lishchyna</span>.</p>
        <p>Based in the Canada, Toronto,  and I'm a front-end developer passionate about building accessible web apps that users love.</p>
        <a className="btn intro__link" href="#contact">Contact Me</a>
      </div>
      <ProfilePhoto/>
      <span className="decor__circle decor">
        <CircleSVG/>
      </span> 
    </Section>
    <section className="skills">
      <h2 className="skills__title visually-hidden">Skills</h2>
      <span className="decor__rings decor">
        <RingsSVG/>
      </span>
      <ul className="skills__list">
       <li className="skills__item">
        <h3>HTML</h3>
        <p>4 Years experience</p>
       </li>
       <li className="skills__item">
        <h3>CSS</h3>
        <p>4 Years experience</p>
       </li>
       <li className="skills__item">
        <h3>Javascript</h3>
        <p>4 Years experience</p>
       </li>
       <li className="skills__item">
        <h3>Accessibility</h3>
        <p>4 Years experience</p>
       </li>
       <li className="skills__item">
        <h3>React</h3>
        <p>3 Years experience</p>
       </li>
       <li className="skills__item">
        <h3>Sass</h3>
        <p>3 Years experience</p>
       </li>
      </ul>
    </section>
    <section className="projects">
      <div className="projects__wrapper">
        <h2 className="projects__title title">projects</h2>
        <a className="btn projects__link" href="#contact">Contact Me</a>
      </div>
      <ul className="projects__list">
        <li className="projects__item">
          <img className="projects__preview-img" src="images/thumbnail-project-1-large.webp" alt="design portfolio" />
          <div className="projects__describe">
            <h3 className="describe__title">design portfolio</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
        <li className="projects__item">
          <img className="projects__preview-img" src="images/thumbnail-project-2-large.webp" alt="e-learning landing page" />
          <div className="projects__describe">
            <h3 className="describe__title">e-learning landing page</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
        <li className="projects__item">
          <img className="projects__preview-img" src="images/thumbnail-project-3-large.webp" alt="todo web app" />
          <div className="projects__describe">
            <h3 className="describe__title">todo web app</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
              <li className="describe__item">javascript</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
        <li className="projects__item">
          <img className="projects__preview-img" src="images/thumbnail-project-4-large.webp" alt="entertainment web app" />
          <div className="projects__describe">
            <h3 className="describe__title">entertainment web app</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
              <li className="describe__item">javascript</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
        <li className="projects__item">
          <img className="projects__preview-img" src="images/thumbnail-project-5-large.webp" alt="memory game" />
          <div className="projects__describe">
            <h3 className="describe__title">memory game</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
              <li className="describe__item">javascript</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
        <li className="projects__item">
          <div className="preview-img--wrapper">
            <img className="projects__preview-img" src="images/thumbnail-project-6-large.webp" alt="art gallery showcase"/>
          </div>
          <div className="projects__describe">
            <h3 className="describe__title">art gallery showcase</h3>
            <ul className="projects__tech-list">
              <li className="describe__item">html</li>
              <li className="describe__item">css</li>
              <li className="describe__item">javascript</li>
            </ul>
            <div className="describe__links-wrapper">
              <a className="btn" href="/some/valid/uri">view projects</a>
              <a className="btn" href="/some/valid/uri">view code</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </main>
  )
}

export default Main;