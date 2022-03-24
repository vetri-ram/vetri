import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Typography } from '@material-ui/core';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
//import { purple } from '@material-ui/core/colors';

const Project = () => {
  const Theme = createTheme({
    palette:{
      primary:{
        main:'#1ABC9C'
      }
      
    }
  })

    return (
       <ThemeProvider theme={Theme}>
        <Router>
            <Navbar/>
             <Typography variant='h5'>
               Welcome To My Home Page. We are Mern Developers.
             </Typography>
             <Routes>
                 <Route exact path='/home' element={<Home/>}/>
                 <Route exact path='/signup' element={<Signup/>}/>
                 <Route exact path='/signin' element={<Signin/>}/>
             </Routes>
        </Router>
        </ThemeProvider>
    );
}

export default Project;
