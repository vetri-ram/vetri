import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebarDiv'>
           
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">services</Link>
            
          
        </div>
    );
}

export default Sidebar;
