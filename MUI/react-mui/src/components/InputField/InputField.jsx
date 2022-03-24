import React, { Component } from 'react';
import './InputField.scss';

class Inputfield extends Component {

    state = {
        person:this.props.person,
    };

    handleChange = (e) => {
        //console.log(e.currentTarget);
        let s = {...this.state}
        if(e.currentTarget.name === 'name')s.person.name = e.currentTarget.value;
        if(e.currentTarget.name === 'age')s.person.age = e.currentTarget.value;
        this.setState(s);
    };
       
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle Submit", this.state.person);
        this.props.onSubmit(this.state.person)
    }
    render() {
        let {name, age} = this.state.person;
        return (
            <div className='inputField-maindiv'>
                <h4>Enter The Deteils of Person</h4>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Enter Your Name"
                    />

                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                    placeholder="Enter Your Age"
                    />

                </div>
              <button className='btn btn-primary' onClick={this.handleSubmit}>
                  clicks
              </button>
            </div>
        );
    }
}

export default Inputfield;
