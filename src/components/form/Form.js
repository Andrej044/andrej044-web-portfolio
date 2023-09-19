import {useRef, useEffect, useState} from 'react';
import { useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Modal from '../modal/Modal';
import './messageForm.css';


// const PopUpWindow = (props) => {
//   const style ={
//     width: '50vw',
//     height:'15vw',
//     position:'absolute',
//     top:'0',
//     left:'0',
//     display:'flex',
//     flexDirection:'column',
//     justifyContent:'space-between',
//     transform: 'translateX(50%)',
//     backgroundColor: 'rgba(50,50,50,0.5)'
//   }

//   return(
//     <div style={style}>
//       <p>{props.message}</p>
//       <button style={{width: '100%', fontSize:'24px', backgroundColor:'rgba(150,150,150,0.8)', borderRadius:'5px'}} type='button'>Ok</button>
//     </div>
//   )
// }

const Form = () => {
  const {register, handleSubmit, reset, formState} = useForm ({
    defaultValues : {
      user_name:"",
      user_email:"",
      user_message:""
  }})

  const[message, setMessage] = useState('');
  const[modalActive, setModalActive] = useState(true)

  const form = useRef();


  const onSubmit = (data) => {
  console.log(data)
  emailjs.sendForm('service_7u9iss8', 'template_yxie3y1', form.current, 'pdBeFRcrGLSWWeybO')
    .then((result) => {
      console.log(result.text);
      setMessage("Awesome! Your message has been sent to Andrii and he'll be so happy to hear from you! Thank you for your message!");
    }, (error) => {
        console.log(error.text);
        setMessage("Oops! We're sorry, something seems to have gone wrong. Don't worry, we'll get it fixed soon! Please try again later.");
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
    <>
    <form id="myForm"  onSubmit={handleSubmit(onSubmit)} ref={form}>
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
    {/* <PopUpWindow message = {message} /> */}
    <Modal active={modalActive} setActive={setModalActive}/>
    </>
  )
}


export default Form