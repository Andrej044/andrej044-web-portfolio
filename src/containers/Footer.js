import Navigation from "./Navigation/Navigation";

const Footer = () =>{
  return(
    <footer className="footer">
    <section id ="contact" className="contact">
      <h2 className="contact-title title">Contact</h2>
      <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      <div className="contact-wrapper">
        <span className="decor__rings decor">
          <svg className="pattern-rings" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fillRule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g>
          </svg>
        </span>
        <form id="myForm">
        <div className="contact-form">
          <div className="form__input-wrapper">  
            <input className="form__input" id="name" name="name" type="text" placeholder="name" autoComplete="name" required/>
          </div>
          <div className="form__input-wrapper input-email">
            <input className="form__input" id="email" name="email" type="email" placeholder="email" autoComplete="off" />
            <span className="email-alert hidden">Sorry, invalid format here</span>
          </div>
          <div className="form__input-wrapper input-message">
            <textarea className="form__input" id="message" name="message" placeholder="message" spellCheck="false" required></textarea>
          </div>
          <button id="submit" className="btn form__btn-submit" type="submit">
            send message
          </button>
        </div>
        </form>
      </div>
    </section>
    <Navigation section={'footer'}/>
  </footer>
  )
}

export default Footer;