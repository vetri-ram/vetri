import React, {useState} from 'react';

const Hoos = () => {
    const [name, setName] = useState(" ");

    const textName = () => {
        setName("am Subash Vetri")
    }

    const InitialCount= 0;
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const [studentNames, setStudentName] = useState(["senthil","vetri"])

    const setStudents = () => {
        setStudentName([...studentNames,"subash",'prasanna'])

    }
      
          
    return (
        <>
        <div>
           <h2 style={{textAlign: 'center'}}> {name}</h2>

          <div>
          <button onClick={textName}>Click Me</button>
          </div>
        </div>
        <div>
           <h2 style={{textAlign: 'center'}}> {count}</h2>

          <div>
          <button onClick={Increment}>Count InCremnet +</button>
          <button onClick={Decrement}>Count DeCremnet -</button>
          <button onClick={()=>setCount(InitialCount)}>Reset</button>
          </div>
        </div>
         <br/>
        
        <ul>
               {
                   studentNames.map(e => <li key = {e}>{e}</li>)
               }
           </ul>
           <button onClick={setStudents}>StudentNames</button>
        </>
    );
}

export default Hoos;
