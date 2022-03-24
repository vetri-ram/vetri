import React,{useState} from 'react';

const Hoos = () => {
    const [name, setName] = useState("Vetri Ramalingam");

    const changeName = () => {
        setName("Subash Vetri")
    }

    return (
        <div className='hoos-mainDiv'>
            <div className='hoos-subDiv'>
             <h2>{name}</h2>
             <input 
             type="text"
             value={name}
             onChange={e=>setName(e.target.value)}
             />
              <button type='submit' onClick={changeName}>Click</button>
            </div>
        </div>
    );
}

export default Hoos;
