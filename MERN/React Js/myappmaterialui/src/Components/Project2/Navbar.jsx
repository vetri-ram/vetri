
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white'
  },
  title: {
    flexGrow: 1,
    color:'white'
  },
  navlink:{
    color: 'white',
    textDecoration:'None'
  }
  
}));




const Navbar = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           My Home Page
          </Typography>
          
           
                <MenuItem>
                <NavLink to={'/home'} className={classes.navlink}  color="secondary">Home</NavLink>
                </MenuItem>
                <MenuItem >
                  <NavLink to={'/signup'} className={classes.navlink} color="secondary">Register</NavLink></MenuItem>
                <MenuItem >
                <NavLink to={'/signin'} className={classes.navlink} color="secondary">Login</NavLink>
                </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default Navbar;
