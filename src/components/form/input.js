import { createElement, useState} from "react";

const Input = (props) => {
  const {name, type, errors, placeholder, className, onChange} = props;
  
  const [value, setValue] = useState(props.value || "");
  
  const inputType = createElement(
      type, 
      {name:name, 
      className:className,   
      value:value, 
      placeholder:placeholder,       
      onChange:(e) => {
      setValue(e.target.value);
      onChange && onChange(e)
    }
  })
  
  return(
    <>
      {inputType}
       <span className="email-alert">{errors && (errors?.message || 'Error!')}</span>
     </>
  )
}

export default Input