import React from 'react';
//import './SideMenu.scss';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    sidemenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'300px',
        height:'100%',
        backgroundColor:'#253053',
        color:'white',
        textAlign:'center',
        fontSize:'30px'

    }
})
    


const Sidemenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.sidemenu}>
            This is Side Menu
        </div>
    );
}

export default Sidemenu;
