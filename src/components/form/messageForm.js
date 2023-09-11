import { useForm, Controller } from 'react-hook-form';
import Input from './input';
import './messageForm.css';


const MessageForm = () => {

  const {register, handleSubmit, formState:{errors}, control} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return(
    <form id="myForm" method='post' onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form">
        <div className="form__input-wrapper">  
          <input 
            {...register('firstName', {
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
                value:/^[A-Za-z]+$/i,
                message: 'Wrong format'
                }}
                )}
            className="form__input" 
            type="text" 
            placeholder="name" 
            autoComplete="name" 
            />
          <span className="email-alert">{errors?.firstName && (errors?.firstName?.message || 'Error!')}</span>
        </div>
        <div className="form__input-wrapper input-email">
          <input 
            {...register('email', {
            required:"Field is required",
            pattern:{
              value:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message:'Please enter valid email'
              }
            })}
            className="form__input"
            type="email" 
            placeholder="email" 
            autoComplete="off" />
          <span className="email-alert">{errors?.email && (errors?.email?.message || 'Error!')}</span>
        </div>
        <div className="form__input-wrapper input-message">
          <textarea 
            {...register('textMessage', {
              required:"Field is required",
              minLength:{
                value:25,
                message:"Could you kindly provide me with a sentence that consists of at least 25 characters?"
              }
            })}
            className="form__input"
            placeholder="Could you kindly provide me with a sentence that consists of at least 25 characters?" 
            spellCheck="false" ></textarea>
          <span className="email-alert">{errors?.textMessage && (errors?.textMessage?.message || 'Error!')}</span>
        </div>
        <div className="form__input-wrapper">
          <Controller
            name="Input"
            control={control}
            rules={{required:{
              value:true,
              message: 'This field required!!!!!!!!'
            }}}
            render={({ 
              field:{onChange, value},
              fieldState: {error}  
              }) => (
              <Input 
                placeholder= "Password"
                className="form__input"
                type = "input"
                errors = {error}
                onChange = {onChange}
                value = {value}
              />
            )}
          />
        </div>
        <button id="submit" className="btn form__btn-submit" type="submit">
          send message
        </button>
      </div>
    </form>
  )
}

export default MessageForm