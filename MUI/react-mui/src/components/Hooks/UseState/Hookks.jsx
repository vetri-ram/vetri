import React,{useState} from 'react';
import './Hookks.scss';
const Hookks = () => {
    
const [city, setCity] = useState("United Arab Emirates");
const [name, setName] = useState("subashvetri");
const [count, setCount] = useState(0);

// const [values, setValues] = useState([]);

const changeName = () =>
    {
        setName("vetri Ramalingam")
    }
const changeCity = () => {
    let iam = city
    if(iam === "United Arab Emirates"){
        setCity("Dubai")
    }else{
        setCity("United Arab Emirates")
    }
   
}

const AddCount = () => 
    {
        setCount(count + 1)
    }
    const MinusCount = () => 
    {
        setCount(count - 1)
    }
    const InitialCount = () =>
    {
        setCount(0)
    }



    return (
        <div className='hookks-mainDiv'>
            <div className='heading'>
            <h2>React Hooks UseState</h2>
            </div>
            <div className='main-content'>
                 <div>
                 <h3>{name}</h3>
                <button className='btn' onClick={changeName}>Click Me</button>
                 </div>
              <div> 
            <h4 className='user-identity'>{city}</h4>
            <button className='btn'onClick={changeCity}>Click Me</button>
            </div> 
            <h3>{count}</h3>
              <div className='countDiv'>
              
            <button className='btn' onClick={AddCount}>Increment</button>            
            <button className='btn' onClick={MinusCount}>Decrement</button>
            <button className='btn' onClick={InitialCount}>Reset</button>
              </div>

            {/* <div className='effectDiv'>
                <h2>Use Effect</h2>
                <h4 className='user-identity'>{JSON.stringify(values)}</h4>
            </div>
            <div className='contextDiv'>
                <h2>Use Context</h2>
                <MyApp/>
            </div> */}
            </div>

            
        </div>
    );
}

export default Hookks;

