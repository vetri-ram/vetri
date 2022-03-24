import { makeStyles} from '@material-ui/core';
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    page:{
          background:'#f9f9f9',
          width:'100%'
    }
})
const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <div>
            <Drawer
            className={classes.drawer}
            >
                <div>
                    <Typography variant='h5'>
                        Notes Vetri
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
                </div>
        </div>
    );
}

export default Layout;
