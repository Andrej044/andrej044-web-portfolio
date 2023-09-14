import React, {useRef, useEffect} from 'react';
import { useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './messageForm.css';




const Form = () => {
  const form = useRef();
  const {register, handleSubmit, reset, formState, formState:{isSubmitSuccesful}} = useForm ({
    defaultValues : {
      Name:"",
      Email:"",
      Message:""
  }})
  
 const onSubmit = data => {
  console.log(data)
  emailjs.sendForm('service_7u9iss8', 'template_yxie3y1', form.current, 'pdBeFRcrGLSWWeybO')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

 }

  return(
    <form>
      <form onSubmit={handleSubmit(onSubmit)} ref={form}>
      <input {...register("something")} />
      <input type="submit" />
    </form>
    </form>
  )
}


export default Form