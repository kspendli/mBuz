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

const JobPost = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Place Job Post</Typography>
                <Grid container>
                    <Grid container item xs={12}>
                        <Grid container item xs={6} >
                            <TextField id="role" 
                                label="Looking for Role" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Computer Operator" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="experiance" 
                                        label="Expecting Experience *(in Years)" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="2" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="minSalary" 
                                label="Salary Range in Minmum" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="7000" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="maxSalary" 
                                        label="Maximum Salary" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="10000" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="skills" 
                                label="Required Skills" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="MsOffice, Ms-Excel" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="locations" 
                                        label="Locations" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="Hyderabad,Pune" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="skills" 
                                label="Required Skills" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="MsOffice, Ms-Excel" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="typeOfJob" 
                                        label="Type of Job" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        select
                                        defaultValue="perm"
                                        fullWidth>
                                {[{"label": "Contract", "value":"contract"}, {"label": "Permanent", "value": "perm"}].map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} className={classes.gridMargin}>
                        <TextField id="jobDescription" 
                            label="Add Job Description" 
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
                            <Button variant="outlined" color="primary" className={classes.button}>Place Job Post</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
}

export default JobPost;