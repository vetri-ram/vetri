import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

const Project = () => {
    return (
        <>
        <Router>
    <Navbar/>
    <Routes>
     
    <Route path='/' element={ <Home/>}/>
    <Route path='/about' element={ <About/>}/>
    <Route path='/contact' element={ <Contact/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/signup' element={ <Signup/>}/>
    
    </Routes>
    </Router>
    </>
        
    );
}

export default Project;
