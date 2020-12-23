import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appbar: {
      alignItems: 'center',
    }
  }));

const Header = (props)=>{
    const classes = useStyles();
    return <div className={classes.root}>
                <AppBar className={classes.appbar}>
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            {props.userData.companyName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>          
}
export default Header;