import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Notecard = ({note, handleDelete}) => {
    return (
        <div>
            <Card>
                <CardHeader
                action={
                    <IconButton onClick={()=>handleDelete(note.id)}>
            <DeleteOutlineIcon />
          </IconButton>
                }
                title={note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography variant="body2" color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Notecard;
