import React, { useState } from 'react';
import { Container } from '@mui/material';
import { TextField } from '@material-ui/core';
import {Button , IconButton} from '@material-ui/core';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Icon from '@mui/icons-material/Send';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
        },
        button: {
            margin: theme.spacing(1),
        }
}))

const AddFields = () => {
    const classes = useStyles();
    const [InputFields, setInputFields] = useState([
        { firstName: " ", lastName: " " },
    ]);

    const handleChangeInput = (index, event) => {
      const values = [...InputFields];
      values[index][event.target.name] = event.target.value;
      setInputFields(values);
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", InputFields);
        
    }

    const handleAddFields = () => {
        setInputFields([...InputFields, { firstName: " ", lastName: " " }])
    }

    const handleRemoveFields = (index) => {
        const values = [...InputFields];
        values.splice(1);
        setInputFields(values);
        
    }

    return (
        <Container>
            <h1>Add New Member</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                {InputFields.map((InputFields, index) => (
                    <div key={index}>
                        <TextField
                            name='firstName'
                            label='First Name'
                            variant='filled'
                            type='text'
                            value={InputFields.firstName}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <TextField
                            name='lastName'
                            label='Last Name'
                            variant='filled'
                            type='text'
                            value={InputFields.lastName}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        {/* <Button
                            onClick={() => {
                                alert('clicked');
                            }}
                        >
                            Click me
                        </Button> */}

                        <IconButton
                         onClick={() => handleRemoveFields()}
                        >
                            <RemoveIcon/>
                        </IconButton>
                        <IconButton
                        onClick={() => handleAddFields()}
                        >
                            <AddIcon/>
                        </IconButton>

                    </div>
                ))}
                <Button 
                className={classes.button}
                variant='contained' 
                color='primary' 
                type='submit' 
                endIcon={<Icon>send</Icon>}
                    onClick={handleSubmit}>
                Send
                </Button>
            </form>
        </Container>
    );
}

export default AddFields;
