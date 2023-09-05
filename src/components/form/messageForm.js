import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './messageForm.css';

const MessageForm = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit =(e)=>{
  //   e.preventDefault();
    
  //   const form = e.target;
  //   const formData = new FormData(form);

  //   const formJson = Object.fromEntries(formData.entries());
  //   console.log(formJson)
  // }

  return(
    <form id="myForm" method='post' onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form">
        <div className="form__input-wrapper">  
          <input 
            {...register('name', {
              required:true, 
              minLength:6,
              maxLength:30,
              pattern:/^[A-Za-z]+$/i,
              })}
            className="form__input" 
            // value={name}
            // onChange={e=>setName(e.target.value)} 
            id="name" 
            name="name" 
            type="text" 
            placeholder="name" 
            autoComplete="name" 
            // required
            />
        </div>
        <div className="form__input-wrapper input-email">
          <input 
            {... register('email', {
            required:true,
            // pattern:{
            //   value:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            //   message:<p>alert message</p>
            //   }
            })}
            className="form__input"
            // value={email}
            // onChange={e => setEmail(e.target.value)} 
            id="email" 
            name="email" 
            type="email" 
            placeholder="email" 
            autoComplete="off" />
          <span className="email-alert hidden">Sorry, invalid format here</span>
        </div>
        <div className="form__input-wrapper input-message">
          <textarea 
            {...register('message', {
              required:true
            })}
            className="form__input"
            // value={message}
            // onChange={e => setMessage(e.target.value)} 
            id="message" 
            name="message" 
            placeholder="message" 
            spellCheck="false" ></textarea>
        </div>
        <button id="submit" className="btn form__btn-submit" type="submit">
          send message
        </button>
      </div>
    </form>
  )
}

export default MessageForm