import React from 'react';
import './IndexMui.scss';
import Home from './Home';
import Note from './Notes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core'; 
import Layout from './Pages/Layout';


const theme = createTheme({
    palette:{
        primary:{
            main:'#fefefe'
        },
        secondary:{
            main:'#AD10BF'
        }
    },
    typography:{
        fontFamily:'Quicksand',
        fontSize:20,
        fontWeightLight:400,
        fontWeightRegular:500,
        fontWeightMedium:400,
        fontWeightBold:700,

    }
})

const Indexmui = () => {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/note' element={<Note/>}/>
            </Routes>
            </Layout>
        </Router>
        </ThemeProvider>
    );
}

export default Indexmui;
