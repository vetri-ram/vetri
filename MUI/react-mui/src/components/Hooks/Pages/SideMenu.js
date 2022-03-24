import React from 'react';
import {Link} from 'react-router-dom';

const Sidemenu = () => {
    return (
        <div className='sidebarDiv'>
              <Link to="/state">UseState</Link>
              <Link to="/effect">UseEffect</Link>
              <Link to="/ref">UseRef</Link>
              <Link to="/context">UseContext</Link>
              
        </div>
    );
}

export default Sidemenu;
