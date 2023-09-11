// // import { useForm } from "react-hook-form";
// // import { useState, useEffect } from "react";
// import React from "react";

// const Input = React.forwardRef(function Input(props,ref){
  
//   const {name, errors, placeholder, className} = props;
  
//   // const err = errors[name];
//   console.log(errors[name])
//   return(
//     <>
//       <input className={className} placeholder={placeholder} ref={ref}/>
//       <span className="email-alert">{errors?.[name] && (errors?.[name]?.message || 'Error!')}</span>
//     </>
//   )
// });


// // const Input = React.forwardRef(({name, placeholder }, ref) => (
// //   <input name={name} ref={ref} />
// // ));

// export default Input