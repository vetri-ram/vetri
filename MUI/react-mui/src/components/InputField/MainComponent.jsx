import React, { Component } from 'react';
import Inputfield from './InputField';
class Maincomponent extends Component {
    handlePerson=(person)=> {
        console.log("Handleperson",person)
    }
    render() {
        let person = {name:"",age:""};
        return (
            <div>
                <Inputfield person={person} onSubmit={this.handlePerson}/>
            </div>
        );
    }
}

export default Maincomponent;
