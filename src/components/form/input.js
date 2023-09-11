import { useState} from "react";

const Input = (props) => {
  const {name, errors, placeholder, className} = props;
  console.log(errors)
  
  const [value, setValue] = useState(props.value || "");
  return(
    <>
      <input 
        name={name} 
        className={className}   
        value={value} 
        placeholder={placeholder}       
        onChange={(e) => {
          setValue(e.target.value);
        props.onChange && props.onChange(e)
        }}/>
       <span className="email-alert">{errors && (errors?.message || 'Error!')}</span>
     </>
  )
}

export default Input