import React from 'react'
import { Typography, makeStyles, TextField } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
  }));

const MyAccount = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Account Details</Typography>
                <TextField id="companyName" label="Company Name" defaultValue="Saanvi Engineering works" />
                <TextField id="city" label="City" defaultValue="Hyderabad" />
            </main>
}

export default MyAccount;