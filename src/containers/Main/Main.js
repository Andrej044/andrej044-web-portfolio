import Section from "../Section";
import ProfilePhoto from "../../components/profilePhoto";
import CircleSVG from "../../components/svg/circleSVG";
import RingsSVG from "../../components/svg/ringsSVG";
import SkillList from "../../components/skillsList.js";
import ProjectsList from "../../components/projectsList";
import ParticlesBg from "particles-bg";

import './Main.css';


const Main = () =>{
  
  return(
  <main className="main">
    <h1 className="main-title visually-hidden">Web developer portfolio Andrii Lishchyna</h1>
    <ParticlesBg color="D95D39"  num={200} type="cobweb" bg={{
      position: 'absolute',
      left:0,
      zIndex:1,
      height:'100vh !important',
      backgroundColor:'transparent',
      opacity:0.5
    }}/>
    <Section name='intro' titleHidden={true} >
      <span className="decor__rings decor">
        <RingsSVG/>
      </span>
      <div className="intro__text">
        <p>Nice to <br className="intro__text--br-hidden"/> meet you! I'm <span className="text--underline">Andrii Lishchyna</span>.</p>
        <p>As a front-end developer and troubleshooter, I possess the skills and expertise to develop user-friendly interfaces and diagnose and resolve technical issues efficiently.</p>
        <a className="btn intro__link" href="#contact">Contact Me</a>
      </div>
      <ProfilePhoto name='intro'/>
      <span className="decor__circle decor">
        <CircleSVG/>
      </span> 
    </Section>
    <Section name='skills' titleHidden={true}>
      <span className="decor__rings decor">
          <RingsSVG/>
      </span>
      <SkillList/>
    </Section>
    <Section name='projects' titleHidden={true}>
      <div className="projects__wrapper">
        <h2 className="projects__title title">Projects</h2>
        <a className="btn projects__link" href="#contact">Contact Me</a>
      </div>
      <ProjectsList/>
    </Section>
  </main>
  )
}

export default Main;