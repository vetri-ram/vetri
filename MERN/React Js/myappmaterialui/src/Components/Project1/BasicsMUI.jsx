
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Header from './Pages/Header';
import Content from './Pages/Content';



const Basicsmui = () => {
    
    return (
       
       <Grid container direction='column'>
           <Grid item>
              <Header/>
               </Grid>
           <Grid item container> 
           <Grid item xs={0} sm={2}/>
           <Grid item xs={12} sm={8}>
            <Typography>
            <Content/>
            </Typography>
            </Grid>
            <Grid item xs={0} sm={2}/>
           </Grid>
          
       </Grid>
       
    );
}

export default Basicsmui;
