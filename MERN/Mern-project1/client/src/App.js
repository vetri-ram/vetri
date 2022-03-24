import React,{useEffect, useState} from 'react';
import Addtask from './Components/AddTask/Addtask';
import axios from 'axios';
import './App.css'
const App = () => {
  const [todolist, setTodolist] = useState([]);
  useEffect(()=>{
axios.get('http://localhost:8000/api/tasks').then(res =>{
  setTodolist(res.data)
}).catch(err =>console.log(err))
  },[])

  const addtask = newtask => {
    setTodolist([...todolist,newtask])
  }

  return (
    <div>
      <Addtask addtask={addtask}/>
    </div>
  );
}

export default App;
