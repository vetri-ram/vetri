import React from 'react';
import './Index.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Sidebar from './Pages/SideBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service'
const Index = () => {
    return (
        <Router>
            <div className='indexMainDiv'>
            <Header/>
            <div className='contentDiv'>
            <Sidebar/>
            <Switch>
          <Route exact path='/'component={Home}/>
          <Route path='/about'component={About}/>
          <Route path='/services'component={Services}/>
         
          </Switch>
            </div>
           </div>
        </Router>
    );
}

export default Index;
