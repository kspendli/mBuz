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

const ClientDetails = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Add Client Details</Typography>
                <Grid container>
                    <Grid container item xs={12}>
                        <Grid container item xs={6} >
                            <TextField id="clientName" 
                                label="Client Name" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="XYZ" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="clientMobileNumber" 
                                        label="Client Mobile Number" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="823848324839" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="clientAddress" 
                                label="Client Address" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Punjagutta" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="clientEmail" 
                                        label="Client Email" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="xyz@gmail.com" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} className={classes.gridMargin}>
                        <TextField id="clientNote" 
                            label="Note For Reference" 
                            className={classes.textField} 
                            variant="outlined" 
                            defaultValue="This client only available on first week of every Month" 
                            fullWidth
                            multiline
                            rowsMax={10}/>
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

export default ClientDetails;