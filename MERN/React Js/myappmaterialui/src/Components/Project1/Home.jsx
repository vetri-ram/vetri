import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, TextField, Container, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    field: {
        marginTop: "20px",
        marginBottom: "20px",
        display: 'block'

    }
})

const Home = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [titleerror, setTitleError] = useState("");
    const [detailserror, setDetailsError] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true);
        }
        if (details === '') {
            setDetailsError(true);
        }


        if (title && details)
        fetch('http://localhost:8000/notes',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({title, details, category})
        }).then(()=>navigate('/note'))
            
    }

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Typography
                variant='h5'
                className={classes.title}
                color='textSecondary'
                component='h2'
                getterButton>
                Create a Root Map
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label='Notes Title'
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleerror}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailserror}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Notes Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={<Radio />} label='money' />
                        <FormControlLabel value='todos' control={<Radio />} label='todos' />
                        <FormControlLabel value='remainder' control={<Radio />} label='remainder' />
                        <FormControlLabel value='work' control={<Radio />} label='work' />
                    </RadioGroup>
                </FormControl>






                <Button
                    className={classes.btn}
                    type='submit'
                    variant='contained'
                    color='secondary'
                    endIcon={<ChevronRightIcon />}
                >Submit</Button>

            </form>







        </Container>
    );
}

export default Home;
