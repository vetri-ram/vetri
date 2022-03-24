import React from 'react';
import {useFormik} from 'formik';
import { Button } from 'reactstrap';

const Formvalid = () => {
    const formik = useFormik({
        initialValues : {
            name : ''
        },
        onSubmit:(userInputData) => { 
            console.log(userInputData);
        }
    })
    return (
        <div className='container'>
           <h2> Welcome To My Homepage</h2>
           <h5>Today , We are learning to React Form Validation</h5>

           <form onSubmit={formik.handleSubmit}>
              <div className='form-group'>
              <label>Name</label>
           <input 
           className='form-control' 
           type='text'
           name="name"
           onChange = {formik.handleChange}
            value = {formik.values.name}
               />
               <button className='btn btn-primary'>Submit</button>
              </div>
           </form>
        </div>
    );
}

export default Formvalid;
