import './Addtask.css'
import React,{useState} from 'react'
import axios from 'axios';

function Addtask(props) {
    const [tasks, setTasks] = useState(" ");
   
    const Addtask = () => {
        if(tasks.trim() === '')
        {
            return
        }else{
            axios.post('http://localhost:8000/api/tasks',{
                todo : tasks,
                isComplete : false
            }).then(res => {
                setTasks("")
                props.addtask(res.data)
            }).catch(err => console.log(err))
        }
    }

    return( 
        <div className='addtask-maindiv'>
            <input 
            type='text'
            placeholder = 'AddTask...'
            value={tasks}
            onChange={(e)=>setTasks(e.target.value)}
            />
            <button onClick={() => Addtask()}>AddTask</button>
        </div>
    )
    
}

export default Addtask;