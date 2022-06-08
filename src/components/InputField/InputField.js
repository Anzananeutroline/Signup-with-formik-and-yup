import React from 'react';
import { useField,ErrorMessage} from "formik";
import "./InputField.css";

const InputField = ({ label, ...props }) => {
    const [field,meta] = useField(props)
  return (
      <div className='inputField'>
          <label htmlFor={field.name}>{ label}</label>
          <input className='input'
              {...field} {...props}
              autoComplete='off' />
          <ErrorMessage name={field.name} component="div" className = "error"/>
    </div>
  )
}

export default InputField;