import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

 class Learning extends React.Component{
   render()
   {
     return <h1>Learn {this.props.topic} in {this.props.language}</h1>
   }
 }

ReactDOM.render(<Learning topic="React Js" language="tamil"/>,

  document.getElementById('root')
);

/* <React.StrictMode>
    <App />
  </React.StrictMode>, */