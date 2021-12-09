import React from 'react';
 import './Crud.css'
 import { useState } from 'react';
 import Axios from 'axios';


const Crud = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);


    const [employeelist, setEmployeeList] = useState([]);

     const addemployee = () => {
         Axios.post("http://localhost:3001/create", 
         {
             name : name,
             age  : age,
             country : country,
             position : position,
             wage : wage,
         }).then(() => {
             console.log("success");
              const setName = "";

         });
    };

     const getemployess = () => {
        Axios.get("http://localhost:3001/employees").then((response) => {
            setEmployeeList(response.data);
        });
            
     };
    
    return (
        <div>
            <div className="employeedetails">
                <label>Name:</label>
                <input type="text" 
                onChange={(event) =>{
                    setName(event.target.value);
                }}
                required/>
                <label>Age:</label>
                <input type="Number" 
                 onChange={(event) =>{
                    setAge(event.target.value);
                }}
                required/>
                <label>Country:</label>
                <input type="text"
                 onChange={(event) =>{
                    setCountry(event.target.value);
                }}
                required/>
                <label>Position:</label>
                <input type="text"
                 onChange={(event) =>{
                    setPosition(event.target.value);
                }}
                required/>
                <label>Wage (year):</label>
                <input type="text"
                 onChange={(event) =>{
                    setWage(event.target.value);
                }}
                required/>
                <button onClick={addemployee}>Add Employee</button>

                
                </div>
                <hr/>
                <div className="employeelist">
                <button onClick={getemployess}>Show Employee</button>

                {employeelist.map((val, key) => {
                    return <div className="employe">
                        <h3>{val.name}</h3>
                        <h3>{val.age}</h3>
                        <h3>{val.country}</h3>
                        <h3>{val.position}</h3>
                        <h3>{val.wage}</h3>
                        </div>;
                })
                }
                  

                
                </div>
        </div>
    );
}

export default Crud;
