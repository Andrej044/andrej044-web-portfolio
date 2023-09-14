import {useRef, useEffect} from 'react';
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

 useEffect(()=>{
  if(formState.isSubmitSuccessful){
    reset({
    Name:"",
    Email:"",
    Message:""})
  }
 }, [formState, reset])

  return(
    <form>
      <form onSubmit={handleSubmit(onSubmit)} ref={form}>
      <input className="form__input" {...register("Name")} />
      <input className="form__input" {...register("Email")} />
      <input className="form__input" {...register("Message")} />
      <input id="submit" className="btn form__btn-submit" type="submit" value={'send message'}/>
    </form>
    </form>
  )
}


export default Form