import {useRef, useEffect} from 'react';
import { useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './messageForm.css';

const Form = () => {
  const {register, handleSubmit, reset, formState} = useForm ({
    defaultValues : {
      user_name:"",
      user_email:"",
      user_message:""
  }})

  
  const form = useRef();
  
  const onSubmit = (data) => {
  console.log(data)

  emailjs.sendForm('service_7u9iss8', 'template_yxie3y1', form.current, 'pdBeFRcrGLSWWeybO')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

 }

  useEffect(()=>{
  if(formState.isSubmitSuccessful){
    reset({
      user_name:"",
      user_email:"",
      user_message:""
  })
  }
 }, [formState, reset])

  return(
    <form id="myForm" method='post' onSubmit={handleSubmit(onSubmit)} ref={form}>
      <div className="contact-form">
        <div className="form__input-wrapper">
          <input  className="form__input" {...register("user_name")} />
        </div>
        <div className="form__input-wrapper input-email">
          <input  className="form__input" {...register("user_email")} />
        </div>
        <div className="form__input-wrapper input-message">
          <input  className="form__input" {...register("user_message")} />
        </div>
        <input id="submit" className="btn form__btn-submit" type="submit" value={'send message'}/>
      </div>
    </form>
  )
}


export default Form