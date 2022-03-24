import React, {useState} from 'react';
import './Hoos.scss';
const Hoos = () => {

    const [name, setName] = useState("subashvetri");
    const [count, setCount] = useState(0);
    

    const changeName = () =>
    {
        setName("Am vetri Ramalingam")
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


    const [studentName, setStudentName] = useState(["Mani","Senthil"]);

    const changeNames = () => {
        setStudentName([...studentName,"Vetri","Subash"])
    }
   
    

   

    

    
   
    

  
    
     
    
    return (
        <>
        <div className='main-div'>
            <h2>Today am learning to React Hooks</h2>
            
        </div>
        <div className='main-content'>
            <ul>
                <h3>{name}</h3>
                <button className='content_btn' onClick={changeName}>Click Me</button>
            </ul>
            <hr/>
            <h3>{count}</h3>
            <button className='content_btn' onClick={AddCount}>Increment</button>            
            <button className='content_btn' onClick={MinusCount}>Decrement</button>
            <button className='content_btn' onClick={InitialCount}>Reset</button>

            </div>
            <hr/>
            <div className='text_content'>
                 {
                     studentName.map(e=><h4 key={e}>{e}</h4>)
                 }
                 <button className='content_btn' onClick={changeNames}>SetStudents</button>
            </div>
              <hr/>
           
                
                




           </>
        
    );
}

export default Hoos;
