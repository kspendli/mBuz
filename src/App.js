import './App.css';
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './Header'
import SideBar from './SideBar';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import BillBook from './BillBook';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6fbf73",
    },
    secondary:{
      main: "#773183",
    }
  }
});

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        userData: {
              "firstName": "Kumaraswamy",
              "secondName": "Pendli",
              "fullName": "Kumaraswamy Pendli",
              "companyName": "Saanvi Engineering Works",
              "email": "kspendli@gmail.com",
              "age": "",
              "contactNumber": "8886228262"
        }
    }
 }

 render() {
    return <div className={{display: 'flex'}}>
            <ThemeProvider theme={colorTheme}>
                <Header userData={this.state.userData}></Header>                
                <SideBar userData={this.state.userData}/>
            </ThemeProvider>
          </div>
 }

}

export default App;
