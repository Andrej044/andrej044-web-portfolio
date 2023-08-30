import { useState } from 'react';
import './messageForm.css';

const MessageForm = () => {

  return(
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
  )
}

export default MessageForm