import { Grid } from '@material-ui/core';
import React from 'react';
import MyCard from './MyCard';

const Content = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <MyCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <MyCard />
            </Grid>
            <Grid item xs={12} sm={4}>
                <MyCard />
            </Grid>
        </Grid>

    );
}

export default Content;
