import React from 'react'
import { Typography, makeStyles, TextField, Grid, Button} from '@material-ui/core';
import { useLocation } from 'react-router-dom';

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

const MyAccount = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Account Details</Typography>
                
                <Grid container>
                    <Grid container item xs={12}>
                        <Grid container item xs={6} >
                            <TextField id="companyName" 
                                label="Company Name *" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Saanvi Engineering works" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="ownerName" 
                                        label="Owner Name *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="Kumaraswamy" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6}>
                            <TextField id="companyPhoneNumber" 
                                        label="Company Phone Number *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="989893284239" 
                                        fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="companyEmail" 
                                        label="Office Email *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="kscompany@gmail.com" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6}>
                            <TextField id="rgisterNo" 
                                        label="Registration Number" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="RG124JBSO9" 
                                        fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="tanNo" 
                                        label="TAN Number" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="T902934MK89" 
                                        fullWidth/>
                        </Grid>   
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6}>
                            <TextField id="country" 
                                        label="Country *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="India" 
                                        fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="state" 
                                        label="State *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="Telangana" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6}>
                            <TextField id="addressLine1" 
                                        label="Address Line 1 *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="BalaNagar" 
                                        fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="addressLine2" 
                                        label="Address Line 2" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="XYZ coloy" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={6} >
                            <TextField id="city" 
                                    label="City *" 
                                    className={classes.textField} 
                                    variant="outlined" 
                                    defaultValue="Hyderabad" 
                                    fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="pincode" 
                                        label="Pincode *" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="5000383" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={4} >
                            <Button variant="outlined" color="secondary" className={classes.button}>Cancel</Button>
                            <Button variant="outlined" color="primary" className={classes.button}>Save</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
}

export default MyAccount;