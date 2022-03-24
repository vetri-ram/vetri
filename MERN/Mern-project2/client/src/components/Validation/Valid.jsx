import React,{useState} from 'react';
import axios from 'axios';
import './Valid.scss';

const Valid = () => {
    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    //const [inputFields, setInputFields] = useState({});

    const handleSubmit = (e) => {
        if(!name||!age||!city)
        {
            setError(true)
            return;
        }
        else{

        setError(false)       
        axios.post("http://localhost:8000/info/create",
          {
            
            name:name,
            age:age,
            city:city
            
        
          }).then((res) =>{        
              console.log(res);
          });

        // const fields = { 
        //     username:username,
        //     email:email,
        //     password:password,
        //     mobile:mobile,
        //     city:city
        // }
        // setInputFields({...inputFields,fields})
        // console.log(fields);
        // setUsername(" ");
        // setEmail(" ");
        // setPassword(" ");
    }
    

    }
    return (
        <div className='mainContainer'>
            <label>Name</label>
            <input 
            name='name'
            type="text"
            placeholder='Enter Your Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            {error && <p className='error'>*Name is Required</p>}
            {/* <label>Email</label>
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
            {error && <p className='error'>*Password is Required</p>} */}
              
            <label>Age</label>
            <input 
            name='age'
            type="number"
            placeholder='Enter Your Age'
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
            {error && <p className='error'>*Age is Required</p>}

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
