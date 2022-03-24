import React from 'react';
import './SideMenu.scss';
import {SidebarData} from './SideeBar';
const Sidemenu = () => {
    return (
        <div className='sideMainDiv'>
            <ul>
              {SidebarData.map((val,key)=>{
                return <li key={key} onClick={()=>{window.location.pathname = val.link}}>
                       {" "}
                       <div>{val.icon}</div>
                       {" "}
                       <div>{val.title}</div>
                       </li>
            })}
            </ul>
        </div>
    );
}

export default Sidemenu;
