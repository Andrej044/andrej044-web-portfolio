import { useForm} from 'react-hook-form';
import './messageForm.css';




const Form = () => {
  const {register, handleSubmit, reset, formState, formState:{isSubmitSuccesful}} = useForm ({
    defaultValues : {
      Name:"",
      Email:"",
      Message:""
  }})
  
 const onSubmit = data => {
  console.log(data)
  
 }

  return(
    <form>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("something")} />
      <input type="submit" />
    </form>
    </form>
  )
}


export default Form