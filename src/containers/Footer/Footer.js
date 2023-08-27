import Navigation from "../Navigation/Navigation";
import RingsSVG from "../../components/svg/ringsSVG";
import MessageForm from "../../components/form/messageForm";
import Section from "../Section";
import './Footer.css';

const Footer = () =>{
  return(
  <footer className="footer">
    <Section id='contact' name='contact' titleHidden={false}>      
      <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <div className="contact-wrapper">
        <span className="decor__rings decor">
          <RingsSVG/>
        </span>
        <MessageForm/>
      </div>
      </Section>
    <Navigation section={'footer'}/>
  </footer>
  )
}

export default Footer;