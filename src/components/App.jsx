import React from 'react';
import Login from './Login.jsx'
import Header from './Header.jsx';
import { Router,Switch, Route,Redirect } from "react-router-dom";
import history from '../../src/js/history/history.js'
import NotFoundPage from './NotFoundPage.jsx';
import AppHome from './Home.jsx';
import DashBoard from './Dashboard.jsx';
import BankingOperations from './cashwithdrawl.jsx';

class App extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            isLoginedIn : false,
        }
        this.updateLogin = this.updateLogin.bind(this);
        this.updateLogout = this.updateLogout.bind(this);
    }
    updateLogin(){
        let loginData = {'login':'true'};
        this.setState({isLoginedIn:true});
        localStorage.setItem('loginData', JSON.stringify(loginData));
    }
    updateLogout(){
        this.setState({isLoginedIn:false});
        localStorage.removeItem('loginData');   
    }
    componentDidMount(){
        
        if(localStorage.getItem('loginData') && localStorage.getItem('loginData') !== undefined){
            this.setState({isLoginedIn:true})
        }
    }
    render(){
    return (
        <div className="container">
        <Router history={history}> 
        <Header loginStatus={this.state.isLoginedIn} updateLogout={this.updateLogout} props={this.props}/>
            <Switch> 
                <Route exact path="/login" render={props =><Login updateLogin={this.updateLogin} {...props}/>}  ></Route>
                <Route exact path="/" render={props =><AppHome stateData={this.state} {...props}/>}  />  
                <Route exact path="/dashboard" render={props =><DashBoard  authed={this.state.isLoginedIn} {...props}/>}  />
                <Route exact path="/withdrawl" render={props =><BankingOperations  authed={this.state.isLoginedIn} {...props}/>}  />
                <Route exact path="*" component={NotFoundPage} />
            </Switch>       
        </Router>
        </div>
    )
    }
}

export default App;