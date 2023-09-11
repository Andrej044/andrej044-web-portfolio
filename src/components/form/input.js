import { useState} from "react";

const Input = (props) => {
  const {name, errors, placeholder, className, onChange} = props;
  
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
          onChange && onChange(e)
        }}/>
       <span className="email-alert">{errors && (errors?.message || 'Error!')}</span>
     </>
  )
}

export default Input