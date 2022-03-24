import React from 'react';
import SideMenu from './SideMenu';
import Header from './Header';
import PageHeader from './Pages/PageHeader';
//import'./NewMui.scss';
import { makeStyles } from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


const useStyles = makeStyles({
    mainMenu:{
        paddingLeft:'300px',
    }
})
const Newmui = () => {
    const classes = useStyles();
    return (
    <>
         <SideMenu/>
        <div className={classes.mainMenu}>
            <Header/>
            <PageHeader 
            title="Page Header"
            subtitle="Page Description"
            icon={<PeopleOutlineIcon fontSize='large'/> }
            />
        </div>
        
        </>
    );
}

export default Newmui;

