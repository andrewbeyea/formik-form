import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form', values);
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.name) {
        errors.name = 'Field Required';
      } else if ( !values.name.includes('@') ) {
        errors.name = 'Username should be an email';
      } else if ( !values.name.includes('.') ) {
        errors.name = 'Username should be an email';
      }
      if(!values.emailField) {
        errors.emailField = 'Field Required';
      } else if ( !values.emailField.includes('@') ) {
        errors.emailField = 'Invalid email address';
      } else if ( !values.emailField.includes('.') ) {
        errors.emailField = 'Invalid email address';
      }
      if(!values.pswField) errors.pswField = 'Field Required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField} />
        {formik.errors.emailField ? <div id="emailError" style={{color: 'red'}}>{formik.errors.emailField}</div> : null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswField ? <div id="pswError" style={{color: 'red'}}>{formik.errors.pswField}</div> : null}
        <div><button id="submitBtn" type="Submit">Submit</button></div>
      </form>
    </div>
  );
}

export default App;
