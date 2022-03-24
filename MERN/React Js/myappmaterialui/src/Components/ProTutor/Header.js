import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    appbar:{
        background:"#fff"
    }
})
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.appbar}>
            <Toolbar>
               <Grid container style={{alignItems:"center"}}>
                   <Grid item >
                   <InputBase
                   placeholder='search items'
                   startAdornment={<SearchIcon/>}
                   />
                   </Grid>
                   <Grid item sm></Grid>
                   <Grid item  >
                       <IconButton>
                           <Badge badgeContent={4} color="secondary">
                             <NotificationImportantIcon style={{color:"blue"}}/>
                           </Badge>         
                       </IconButton>
                       <IconButton>
                           <Badge>
                             <ChatBubbleIcon style={{color:"blue"}}/>
                           </Badge>         
                       </IconButton>
                       <IconButton>
                           <Badge>
                             <AcUnitIcon style={{color:"white"}}/>
                           </Badge>         
                       </IconButton>
                   </Grid>
               </Grid>
                </Toolbar>
        </AppBar>
            
        
    );
}

export default Header;
