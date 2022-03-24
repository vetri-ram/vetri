import React,{useState} from 'react';
import axios from 'axios';
import './Valid.scss';

const Valid = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    //const [inputFields, setInputFields] = useState({});

    const handleSubmit = (e) => {
        if(!name||!email||!password||!mobile||!city)
        {
            setError(true)
            return;
        }
        else{

        setError(false)       
        axios.post("http://localhost:5111/users/create",
          {
            
            name:name,
            email:email,
            password:password,
            mobile:mobile,
            city:city
            
        
          }).then((res,err) =>{  
              if(err)console.log("not submit")
              console.log("Success");      
          });
          setName("");
          setMobile("");
          setCity("");
          setEmail("");
          setPassword("");

       
    }
    

    }
    return (
        <div className='mainContainer'>
            <label>UserName</label>
            <input 
            name='name'
            type="text"
            placeholder='Enter Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            {error && <p className='error'>*UserName is Required</p>}
            <label>Email</label>
            <input 
            name='email'
            type="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            {error && <p className='error'>*Email is Required</p>}
            <label>Password</label>
            <input 
            name='password'
            type="password"
            placeholder='Enter Your password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            {error && <p className='error'>*Password is Required</p>}
              
            <label>Mobile</label>
            <input 
            name='mobile'
            type="number"
            placeholder='Enter YourMobile No'
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            />
            {error && <p className='error'>*Mobile Number is Required</p>}

            <label>City</label>
            <input 
            name='city'
            type="text"
            placeholder='Enter Your City Name'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            />
            {error && <p className='error'>*City is Required</p>}
            <button className='btn' type="submit" onClick={handleSubmit}>Submit</button>
            
        </div>
    );
}

export default Valid;
