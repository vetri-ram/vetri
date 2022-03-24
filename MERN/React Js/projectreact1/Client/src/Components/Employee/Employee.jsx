import React from 'react';

const Employee = (props) => {
    console.log(props.name)
    return (
        <div>
            <h3>Hello {props.name}</h3>
        </div>
    );
}

export default Employee;
