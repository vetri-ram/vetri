import React,{useState} from 'react';
import './validation.scss';
const Validation = () => {
    const initialState = { username:" ",email:" ",password:" "}
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        
        const {name,value} = e.target;
        setFormData({...formData, [name]: value});
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate(formValues);
        setIsSubmit(true);
    }

    const validate = (values) => {
           const errors = {}
           if(!values.username)
           {
               errors.username = "username is required";
           }
           if(!values.email)
           {
               errors.email = "email is required";
           }
           if(!values.password)
           {
               errors.password = "password is required";
           }
           return errors;
    }

    return (
        <div className='valid-container'>

            <pre>
                {JSON.stringify(formData,undefined,2)}
            </pre>
            <form onSubmit={handleSubmit}>
            <div className='validforms'>
            <h2>Login Form</h2>
                <div className='fields'>
                    <label>UserName</label><br/>
                    <input type="text" name="username" value={formData.username} onChange={handleChange}/><br/>
                    <label>Email</label><br/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/><br/>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/><br/>
                </div>
                 <button className='valid-btn' type='submit'>Submit</button>
            </div>
            </form>
            
        </div>
    );
}

export default Validation;
