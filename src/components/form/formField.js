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
       <span className={errors?.message ? "alert" : ""}>{errors && (errors?.message || 'Error!')}</span>
      {inputType}
     </>
  )
}

export default FormField