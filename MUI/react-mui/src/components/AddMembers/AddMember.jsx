import React, {useState} from 'react';
import './AddMember.scss';

const Addmember = () => {
    const [inputList, setInputlist] = useState([
        {firtstName : '', lastName : ''},
    ])

    const handleChange = e => {
        const { name, value } = e.target;
        setInputlist({
            ...inputList,
            [name]: value
        })


    }

    return (
        <div className='addmember_main-div'>
            <b>Add and Remove Fields In Dynamically</b><br/>
            <div className='addmember_maincontent'>
                <input 
                   type='text'
                   name='firstname'
                   placeholder='First Name'
                   className='subcontent'
                   value={inputList.firstName}
                   onChange={handleChange}
                />
                <input 
                   type='text'
                   name='lastname'
                   placeholder='Last Name'
                   className='subcontent'
                   value={inputList.LastName}
                   onChange={handleChange}
                />
                <input 
                   type='button'
                   value='Remove'
                   className='subcontent'
                />
                <input 
                   type='button'
                   value='Add'
                />
            </div>
            <pre>
                {JSON.stringify(inputList,null)}
            </pre>
        </div>
    );
}

export default Addmember;
