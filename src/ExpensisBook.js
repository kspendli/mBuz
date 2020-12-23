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

const ExpensisBook = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Add Expensis Information</Typography>
                <Grid container>
                    <Grid container item xs={8} >
                        <TextField id="expType" 
                            label="Expensis Type" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="Entertainment" 
                            fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="expPurpost" 
                                    label="Purpose" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="Party to Employees" 
                                    fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="expensisAmount" 
                                    label="Expensis Amount" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="10000" 
                                    fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="paidFrom" 
                                    label="Paid By (Who Paid)" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="kumar" 
                                    fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="paidTo" 
                                    label="Recieved By" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="swamy" 
                                    fullWidth/>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="expDescription" 
                            label="Deal Description" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="Year end party for All Employees" 
                            fullWidth
                            multiline
                            rowsMax={10}/>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={4} >
                            <Button variant="outlined" color="secondary" className={classes.button}>Cancel</Button>
                            <Button variant="outlined" color="primary" className={classes.button}>Submit Expensis</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
}

export default ExpensisBook;