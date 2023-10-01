import Navigation from "../Navigation/Navigation";
import RingsSVG from "../../components/svg/ringsSVG";
import Form from "../../components/form/Form";
import Section from "../Section";
import './Footer.css';

const Footer = () =>{
  return(
  <footer className="footer">
    <Section id='contact' name='contact' titleHidden={false}>      
      <p>If you ever have any suggestions or advice that you would like to share with me, or if you have a project in mind that you think we could work on together, please don't hesitate to reach out.<br/>No matter what language you speak - English, Ukrainian, Polish or Russian - I'm all ears! <br/>I will make every effort to respond to you as quickly as possible.
      </p>
      <div className="contact-wrapper">
        <span className="decor__rings decor">
          <RingsSVG/>
        </span>
        <Form/>
      </div>
      </Section>
    <Navigation section={'footer'}/>
  </footer>
  )
}

export default Footer;