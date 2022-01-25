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
   
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);

    // const [inputFields, setInputFields] = useState([{
    //     Questions: "", Answers: ""
    // }]);

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log("Question :" + question +  <br/> +"Answer is :" + answer)
         setQuestion("");
         setAnswer("");

     }

    //  const handleChangeInput = (index,e) => {
    //         const {name,value} = e.target
    //         const fields = [...inputFields];
    //         fields[index][name] = value;
    //         setInputFields(value);

    //  }
   
    

  
    
     
    
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
            <div className='inputField-Content'>
                
                    
                        <div className='inputfields'>
                        <input 
                        name="question"
                        placeholder='Questions'
                        className='main_inputfield'
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        />
                    <input 
                    type="text"
                    name="answers"
                    placeholder='Answers'
                    className='main_inputfield'
                    value={answer}
                    onChange={(e)=>setAnswer(e.target.value)}
                    
                    />
                    <button className='input_btn'>+</button>
                    <button className='input_btn'>-</button>
                    </div>
                    
                
                <button className='submit-btn' type='submit' onClick={handleSubmit} >Click Me</button>
            </div>
        </>
    );
}

export default Hoos;
