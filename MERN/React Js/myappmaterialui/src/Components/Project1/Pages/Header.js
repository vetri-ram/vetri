import { AppBar, Grid, Icon, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles({
    tynographyStyles:{
       flex:'1'
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
            <Typography className={classes.tynographyStyles}>
                    Subash Vetri
                </Typography>
                <AcUnitIcon/>
                {/* <Grid container>
                <Grid item>
                
                    </Grid>
                    <Grid item sm></Grid>
                <Grid item>
                <IconButton>
                  <Icon item className={classes.icon} >
                    
                    </Icon>
                </IconButton></Grid>
                </Grid> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
