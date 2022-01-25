import React, {useState} from 'react';
import './InputData.scss';

const Inputdata = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginForm, setLoginForm] = useState([]);

    const loginSubmit = (e) => {
        e.preventDefault();
       const form = {email: email, password:password}
       setLoginForm([...loginForm,form])
       console.log(form);

       setEmail();
       setPassword();
        
    }
   
    return (
        <div className='main-container' >
            <div className="sub-container">
            <h2>Basic Login Form</h2>
            
             <div className="loginform" >
             <label className='label-email'>Enter Your Email</label>
             <input
             type="email"
             name='email'
             placeholder='Enter Your Email?'
             className='email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <label className='label-password'>Enter Your Password</label>
            <input
            type="password"
            name='password'
            placeholder='password'
            className='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
             </div>
             <button type='submit' className='btn' onClick={loginSubmit} >Login</button>
             <div className='Output'>
                 <h2>Output</h2> 
            
                {
                    loginForm.map( (curElem) => {
                        return (<div className='showdetails'>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                        </div>)

                    })
                   
                }
            </div>
            </div>
            
        </div>
    );
}

export default Inputdata;
