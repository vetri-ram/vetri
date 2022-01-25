import React, {useState} from 'react';
import './InputFields.scss';
const Inputfields = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
         const data = {question,answer}
         if(question&&answer)
         {
         setList((ls)=>[...ls,data])
         setQuestion("")
         setAnswer("")
         }

    }
    return (
        <div className='main_container'>
            <h3>React Input Fields</h3>
            <form>
            <div className='main_container-input'> 
            <input name="question" type="text" placeholder='Questions' value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            <input name="answer" type="text" placeholder='Enter your Answer' value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
            <input value="Add" type="button" onClick={handleSubmit}/>
            </div>
            </form>
               {
                 list.map((s) =><div>
                 <ul>
                     <li key={s}>{s.question}</li>
                     <li>{s.answer}</li>
                 </ul>
                 </div>)
             } 
        </div>
    );
}

export default Inputfields;
