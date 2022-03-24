import React,{useState} from 'react';
import Valid from '../ValidationForm/Valid';
import './Datavalid.scss';

const Datavalid = () => {
    const [username, setUsername] = useState("");
    console.log(username);
    return (
        <div className='dataValidContainer'>
            <form>
            <Valid placeholder="username" setUsername={setUsername} />
            <Valid placeholder="Email"/>
            <Valid placeholder="FullName"/>
            <Valid placeholder="Mobile No"/>
            <Valid placeholder="Gender"/>
            </form>
        </div>
    );
}

export default Datavalid;
