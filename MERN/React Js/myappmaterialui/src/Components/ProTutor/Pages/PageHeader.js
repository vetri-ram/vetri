import { Card, Paper,Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4)
    },
    pageDesc:{
        paddingLeft:theme.spacing(4)
    }


}))

const Pageheader = (props) => {
    const classes = useStyles();
    const {title, subtitle, icon} = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div>
                    <Typography
                    variant="h6"
                    component="div" className={classes.pageTitle}>
                    {title}
                    </Typography>
                    <Typography
                    variant="subtitle2"
                    component="div" className={classes.pageDesc}>
                    {subtitle}
                    </Typography>

                </div>
            </div>

        </Paper>
    );
}

export default Pageheader;
