import React, { Component } from 'react';
import './True.css';

class True extends Component {
    render() {
        return (
            <div>
                 <div class="main-class">
                  <div class="box">
                <label>Questions*</label>
                   <input type="text"/>
               </div>
               <div class="">
                <label class="answer">Answer for Questions*</label>
                <select placeholder="">
                    <option>Answer</option>
                    <option>True</option>
                    <option>False</option>
                </select>
            </div>
            
            </div>
             
    </div>
            
        );
    }
}

export default True;
