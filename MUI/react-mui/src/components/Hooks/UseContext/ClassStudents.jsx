import React from 'react';
import { useContext } from 'react';
import { studentContext } from './MyApp';

const Classstudents = () => {

    const students = useContext(studentContext);

    return (
        <div>
            <h2>Child3 Comp</h2>
           <ul>
               {
                 students.map(e=><li key={e}>{e}</li>)
               }
           </ul>
        </div>
    );
}

export default Classstudents;
