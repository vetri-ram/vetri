import React,{useState} from 'react';
import './Signup.scss';
import { Axios } from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from '../Images/profile.svg';
import { NavLink } from 'react-router-dom';
import {FaUser,FaMobile,FaCity} from 'react-icons/fa';
import {MdWork,MdEmail,MdPassword} from 'react-icons/md';

const Signup = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [work, setWork] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState();

    const [formdata, setFormdata] = useState([]);


    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {name,mobile,city,work,email,password,cpassword}
        setFormdata([...formdata,data])
        console.log(data);
        setName("");
        setMobile("");
        setCity("");
        setWork("");
        setEmail("");
        setPassword("");
        setCpassword("")
    }
    return (
        <>
        <section className='signup'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='form-title'>Signup</h2>
                    <form class="row g-3">
  <div class="col-md-12">
    <label for="name" class="form-label"><FaUser/>Name</label>
    <input 
    type="text" 
    class="form-control" 
    id="name"
    name='name'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="inputMobile4" class="form-label"><FaMobile/>Mobile</label>
    <input 
    type="number" 
    class="form-control" 
    id="inputMobile4"
    value={mobile}
    onChange={(e)=>setMobile(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="inputCity4" class="form-label"><FaCity/>City</label>
    <input 
    type="text" 
    class="form-control" 
    id="inputCity4"
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="inputWork4" class="form-label"><MdWork/>Work</label>
    <input 
    type="text" 
    class="form-control" 
    id="inputWork4"
    value={work}
    onChange={(e)=>setWork(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label"><MdEmail/>Email</label>
    <input 
    type="email" 
    class="form-control" 
    id="inputEmail4"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label"><MdPassword/>Password</label>
    <input 
    type="password" 
    class="form-control" 
    id="inputPassword4"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div class="col-md-6">
    <label for="inputCPassword4" class="form-label"><MdPassword/>CPassword</label>
    <input 
    type="password" 
    class="form-control" 
    id="inputCPassword4"
    value={cpassword}
    onChange={(e)=>setCpassword(e.target.value)}/>
    
  </div>
  <div className='d-grid gap-2 col-6 mx-auto'>
  <button type='submit' className='regis-btn' onClick={handleSubmit}>Submit</button>
  </div>
  <div>
                      <NavLink className="nav-login" to="/login">Already You Have Register?</NavLink>
                    </div>
  </form>
  
                    </div>
                    <div className='col'>
                    <div className='profile-image'>
                        <figure>
                            <img src={profile} alt='Profile Img' />
                        </figure>
                    </div>
                    
                        </div>
                    
                </div>
                

                
            </div>
        </section>
             
        </>
    );
}

export default Signup;
