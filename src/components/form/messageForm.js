import { useForm, Controller } from 'react-hook-form';
import FormField from './formField';
import './messageForm.css';


const MessageForm = () => {

const apiKey = 'cb7314871103477bafe9677e5fe1c283';
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;

  const { handleSubmit,  control} = useForm();

  const onSubmit = (data) => {

    console.log(data);
  }

  return(
    <form id="myForm" method='post' onSubmit={handleSubmit(onSubmit)}>
      <div className="contact-form">
        <div className="form__input-wrapper">
        <Controller
            name="Name"
            control={control}
            rules={{
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
                }}}
            render={({ 
              field:{onChange, value},
              fieldState: {error}  
              }) => (
              <FormField 
                placeholder= "name"
                className="form__input"
                formField = "input"
                type="text"
                errors = {error}
                onChange = {onChange}
                value = {value}
              />
            )}
            />  
        </div>
        <div className="form__input-wrapper input-email">
          <Controller
            name="Email"
            control={control}
            rules={{
            required:"Field is required",
            pattern:{
              value:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message:'Please enter valid email'
              }
            }}
            render={({ 
              field:{onChange, value},
              fieldState: {error}  
              }) => (
              <FormField 
                placeholder= "email"
                className="form__input"
                formField = "input"
                type="email"
                errors = {error}
                onChange = {onChange}
                value = {value}
              />
            )}
            />
        </div>
        <div className="form__input-wrapper input-message">
          <Controller
            name="Message"
            control={control}
            rules={{
              required:"Field is required",
              minLength:{
                value:25,
                message:"Could you kindly provide me with a sentence that consists of at least 25 characters?"
              }}}
            render={({ 
              field:{onChange, value},
              fieldState: {error}  
              }) => (
              <FormField 
                placeholder= "Could you kindly provide me with a sentence that consists of at least 25 characters?"
                className="form__input"
                formField = "textarea"
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