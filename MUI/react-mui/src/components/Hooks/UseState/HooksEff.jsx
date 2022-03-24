
import React,{useState,useEffect} from 'react';

const sampleData = [
    {name:"karthik" , age:"29", friends:"200", image:"10"},
    {name:"sundar" , age:"30", friends:"300", image:"20"},
    {name:"vinoth" , age:"25", friends:"400", image:"50"},
    {name:"vetrivel" , age:"20", friends:"500", image:"100"},
]

const HooksEff = () => {
    console.log("comp start")
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("then useEffect start")
       setTimeout(() => {
           setData(sampleData);
       }, 5000);
       
    });

    return (
        
        <div className='effectdiv'>
           { console.log("comp called")}
            <h2>React Hooks UseEffect</h2>
            <table>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>friends</th>
                    <th>images</th>
                </tr>
                {data.length === 0 && <td>DataLoading....</td>}
               {data.map((dat) => (
                    <tr>
                    <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.friends}</td>
                    <td>{dat.image}</td>
                </tr>
               ))}
            </table>
           {/* {console.log("component excute")} */}
            {/* <button className='btn'>Click 1</button> */}
            
        </div>
    );
}

export default HooksEff;
