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

const OrderBook = ()=>{
    const classes = useStyles();
    return <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>Place Orders Here</Typography>
                <Grid container>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="itemName" 
                                label="Item Name" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Mango Pickle" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="quntity" 
                                        label="Quantity" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="5kg" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="dueTime" 
                                label="Due Date/Time" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Jan 31st" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="advanceAmount" 
                                        label="Advance Amount" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="2000" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="orderFor" 
                                label="Order For (Select from Client's also)" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="Sita ramaraju" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="toAddress" 
                                        label="To Address" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="Vizag" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}>
                        <Grid container item xs={6} >
                            <TextField id="clientMobileNumber" 
                                label="Clinet Mobile Number" 
                                className={classes.textField} 
                                variant="outlined" 
                                defaultValue="1241245" 
                                fullWidth/>
                        </Grid>
                        <Grid container item xs={6}>
                            <TextField id="clientEmail" 
                                        label="Client Email" 
                                        className={classes.textField} 
                                        variant="outlined" 
                                        defaultValue="sitrama@gmail.com" 
                                        fullWidth/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.gridMargin}> 
                        <Grid container item xs={4} >
                            <Button variant="outlined" color="secondary" className={classes.button}>Cancel</Button>
                            <Button variant="outlined" color="primary" className={classes.button}>Place Order</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
}

export default OrderBook;