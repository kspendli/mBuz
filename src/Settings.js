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

const Settings = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Add Settings for Company</Typography>

                <Grid container>
                    <Grid container item xs={8}>
                        <TextField id="noticePeriod" 
                            label="Notice Period for Employee (In Days)" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="30" 
                            fullWidth/>
                    </Grid>
                    <Grid container item xs={10} className={classes.gridMargin}>
                        <Grid container item xs={5}>
                            <TextField id="typeOfJob" 
                                        label="Type of Job" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        select
                                        defaultValue="baseSalary"
                                        fullWidth>
                                {[{"label": "Based On Salary", "value":"baseSalary"}, {"label": "Fixed", "value": "fixed"}].map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid container item xs={4}>
                            <TextField id="fixedAmount" 
                                        label="Fixed Amount" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="300" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                        <TextField id="workHours" 
                            label="Working Hours(in Hours)" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="8" 
                            fullWidth/>
                    </Grid>
                    
                    <Grid container item xs={10} className={classes.gridMargin}>
                        <Grid container item xs={5} className={classes.gridMargin}>
                            <TextField id="sickLeves" 
                                label="Sick Leaves" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="12" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={4} className={classes.gridMargin}>
                        <TextField id="casualLeaves" 
                            label="Casual Leaves" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="12" 
                            fullWidth/>
                    </Grid>
                    </Grid>
                    <Grid container item xs={8} className={classes.gridMargin}>
                            <TextField id="salaryPaymentDay" 
                                        label="Salary Payment Date (in number)" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="01" 
                                        fullWidth/>
                        </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={4} >
                            <Button variant="outlined" color="secondary" className={classes.button}>Cancel</Button>
                            <Button variant="outlined" color="primary" className={classes.button}>Save Settigs</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </main>
}

export default Settings;