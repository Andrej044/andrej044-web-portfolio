import { createElement, useState} from "react";

const FormField = (props) => {
  const {name, formField, errors, placeholder, className, onChange, type} = props;
  
  const [value, setValue] = useState(props.value || "");
  
  const inputType = createElement(
      formField, 
      {name:name, 
      className:className,   
      value:value,
      type:type, 
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

export default FormField