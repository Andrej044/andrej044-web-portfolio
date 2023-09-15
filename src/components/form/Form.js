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
          <input  className="form__input" {...register("user_name", {
              required:"Field is required", 
              minLength:{
                value:5,
                message:"Minimum name length 5 characters"
              },
              maxLength:{
                value:30,
                message:"Minimum name length 30 characters"
              },
              pattern:{
                value:/^[a-zA-Z0-9_ ]*$/i,
                message: 'Wrong format'
                }})} />
          <span className={formState.errors["user_name"]?.message ? "alert" : "empty"}>{formState.errors["user_name"] && (formState.errors["user_name"]?.message || 'Error!')}
          </span>
        </div>
        <div className="form__input-wrapper input-email">
          <input  className="form__input" {...register("user_email", {
              required:"Field is required",
              pattern:{
                value:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message:'Please enter valid email'
              }
            })} />
          <span className={formState.errors["user_email"]?.message ? "alert" : "empty"}>{formState.errors["user_email"] && (formState.errors["user_email"]?.message || 'Error!')}
          </span>
        </div>
        <div className="form__input-wrapper input-message">
          <input  className="form__input" {...register("user_message",{
              required:"Field is required",
              minLength:{
                value:25,
                message:"Could you kindly provide me with a sentence that consists of at least 25 characters?"
              }})} />
          <span className={formState.errors["user_message"]?.message ? "alert" : "empty"}>{formState.errors["user_message"] && (formState.errors["user_message"]?.message || 'Error!')}
          </span>
        </div>
        <input id="submit" className="btn form__btn-submit" type="submit" value={'send message'}/>
      </div>
    </form>
  )
}


export default Form