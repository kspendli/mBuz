import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
  }));

const EmployeeDetails = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph> From EmployeeDetails Page</Typography>
            </main>
}

export default EmployeeDetails;