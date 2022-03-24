import React,{useState,useContext} from 'react';
import One from './One';
import './Context.scss';

export const studentContext = React.createContext([]);
const Myapp = () => {
    const [value, setValue] = useState("");
    const [studentNames, setStudentNames] = useState([]);


  

    const mySubmit = (e) => {
        e.preventDefault();
      setStudentNames(names => [...names,value])
    }

    return (
        <div className='contextDiv'>
          <h2>Parent Comp</h2>
        <form onSubmit={mySubmit}>
        <input 
        type='text'
        value={value}
        onChange={e=>setValue(e.target.value)}
        />
        <button type='submit' className='btn'>Submit</button>
        </form>

        <studentContext.Provider value={studentNames}>
            <One/>
        </studentContext.Provider>
        </div>
    );
}

export default Myapp;

