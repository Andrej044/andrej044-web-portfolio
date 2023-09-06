import { useForm } from "react-hook-form"

const Input = (name, placeholder) => {
  const {register, formState:{errors}} = useForm();
  
  return(
    <input {...register(name)} placeholder={placeholder}/>
  )
}

export default Input