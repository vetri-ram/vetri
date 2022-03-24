
import React from 'react';
import './Login.scss';
import loginpic from '../Images/loginpic.svg';

const Login = () => {
    return (
        <div className='loginform'>
        <div className='container'>
        <h2 className='login-title'>Welcome To Login Page</h2>
            <div className='row'>
            
                <div className='col'>
                    <form>
                   <div>
                   <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                    type='email'
                    className="form-control"
                    />
                   </div>
                    <div>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input 
                    type='password'
                    className="form-control"
                    />
                    </div>
                    <div className='d-grid gap-2 col-6 mx-auto'>
                    <button type="submit" className='login-btn'>Login</button>
                    </div>
                    </form>
                </div>
                <div className='col'>
                <div className='login-image'>
                        <figure>
                            <img src={loginpic} alt='Login Img' />
                        </figure>
                    </div>
                </div>
            </div>
            </div>
           
           
        </div>
    );
}

export default Login;
