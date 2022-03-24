import React,{useState} from 'react';
import './LoginArray.scss';

const Loginarray = () => {
    const Bio = [
        {
            id:1,
            Question:"Hi, How Are You?",
            Answer:"Am Very Good"
        },
        {
            id:2,
            Question:"Hi, How Are You?",
            Answer:"Am Very Good"
        },
        {
            id:3,
            Question:"Hi, How Are You?",
            Answer:"Am Very Good"
        },
        {
            id:4,
            Question:"Hi, How Are You?",
            Answer:"Am Very Good"
        },
        {
            id:5,
            Question:"Hi, How Are You?",
            Answer:"Am Very Good"
        },
    ]

    console.log(Bio);
    return (
        <div className='maindiv'>
            {
                Bio.map((curEle)=>{
                    return <><h2> {curEle.Question}</h2> 
                              <h5> {curEle.Answer}</h5>
                              </>
                })
            }
        </div>
    );
}

export default Loginarray;
