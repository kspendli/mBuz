import BillBook from "./BillBook";
import Home from "./Home";
import { makeStyles, Divider, Drawer, ListItem, ListItemText, List, Typography } from "@material-ui/core";
import { Switch, Route, BrowserRouter as Router, withRouter, useHistory, Link } from "react-router-dom";
import ClientDetails from "./ClientDetails";
import MyAccount from "./MyAccount";
import ExpensisBook from "./ExpensisBook";
import OrderBook from "./OrderBook";
import CurrentOrders from "./CurrentOrders";
import BusinessPost from "./BusinessPost";
import JobPost from "./JobPost";
import EmployeeDetails from "./EmployeeDetails";
import Settings from "./Settings";
const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth
    }
  }));


const SideBar = (props) =>{
    const classes = useStyles();
    const menuItems = [
      {
        path: "/",
        name: "Home"
      },
      {
        path: "/myAccount",
        name: "My Account"
      },
      {
        path: "/clientDetails",
        name: "Client Details"
      },
      {
        path: "/billBook",
        name: "Bill Book"
      },
      {
        path: "/expensisBook",
        name: "Expensis Book"
      },
      {
        path: "/orderBook",
        name: "Order Book"
      },
      {
        path: "/currentOrders",
        name: "Current Orders"
      },
      {
        path: "/businessPost",
        name: "Business Post"
      },
      {
        path: "/jobPost",
        name: "Job Post"
      },
      {
        path: "/employeeDetails",
        name: "Employee Details"
      },
      {
        path: "/settings",
        name: "Settings"
      }
    ]
    return <div className={classes.container}>
                    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper}} anchor="left" >
                      <div className={classes.toolbar} />
                      <Divider />
                      <List>
                        {menuItems.map((item, index) => (
                          <ListItem button key={item.name} component={Link} to={item.path}>
                            <ListItemText primary={item.name} />
                          </ListItem>
                        ))}
                      </List>
                    </Drawer>

                    <Switch>
                        <Route exact from="/" >
                            <Home></Home>
                        </Route>
                        <Route exact path="/myAccount">
                            <MyAccount />
                        </Route> 
                        <Route exact path="/clientDetails">
                            <ClientDetails />
                        </Route> 
                        <Route exact path="/billBook">
                            <BillBook />
                        </Route> 
                        <Route exact path="/expensisBook">
                            <ExpensisBook />
                        </Route> 
                        <Route exact path="/orderBook">
                            <OrderBook />
                        </Route> 
                        <Route exact path="/currentOrders">
                            <CurrentOrders />
                        </Route> 
                        <Route exact path="/businessPost">
                            <BusinessPost />
                        </Route> 
                        <Route exact path="/jobPost">
                            <JobPost />
                        </Route> 
                        <Route exact path="/employeeDetails">
                            <EmployeeDetails/>
                        </Route> 
                        <Route exact path="/settings">
                            <Settings/>
                        </Route> 
                    </Switch>
            </div>
}

export default SideBar;
