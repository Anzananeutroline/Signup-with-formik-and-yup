import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from '../InputField/InputField';
import "./Signup.css";

const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(10, "First Name must be 15 characters or less")
            .required("First Name is Required"),
         lastName: Yup.string()
            .max(10, "Last Name must be 15 characters or less")
            .required("Last Name is Required"),
          email: Yup.string()
        .email("Email must be valid")
            .required("Email is Required"),
           password: Yup.string()
            .min(8, "Password must be 8 characters long")
            .required("Password is Required"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"),null],"Password must match")
            .required("Confirm Password is Required"),
    })
  return (
      <Formik
          initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword:''
          }}
          validationSchema={validate}
          onSubmit={values => {
              console.log(values)
          }}
      >
          {
              formik => (
                  <div className='signup'>
                      <h1 className="title">Sign Up</h1>
                    
                      <Form>
                        <InputField label = "First Name" name = "firstName" type = "text"/>
                        <InputField label = "Last Name" name = "lastName" type = "text"/>
                        <InputField label = "Email" name = "email" type = "email"/>
                        <InputField label = "Password" name = "password" type = "password"/>
                          <InputField label="Confirm Password" name="confirmPassword" type="password" />
                          <div className="buttons">
                               <button className='signup-btn' type = "submit">Signup</button>
                               <button className='reset-btn' type = "reset">Reset</button>
                         </div>
                      </Form>
                  </div>
              )
         }
    </Formik>
  )
}

export default Signup;