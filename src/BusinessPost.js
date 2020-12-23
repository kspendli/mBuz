import React from 'react'
import { Typography, makeStyles, TextField, Grid, Button, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '92%',
    },
    gridMargin: {
        marginTop: theme.spacing(2)
    },
    button: {
        margin: theme.spacing.unit,
    }
  }));

const BusinessPost = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Add Business Post</Typography>
                <Grid container>
                    <Grid container item xs={8} >
                        <TextField id="reachEmail" 
                            label="Contact Email" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="kspendliu@gmail.com" 
                            fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="reachMobile" 
                                    label="Contact Number" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="24234324224" 
                                    fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="dealDescription" 
                            label="Deal Description" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="" 
                            fullWidth
                            multiline
                            rowsMax={10}/>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={4} >
                            <Button variant="outlined" color="secondary" className={classes.button}>Cancel</Button>
                            <Button variant="outlined" color="primary" className={classes.button}>Place Business Post</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
}

export default BusinessPost;