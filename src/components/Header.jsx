import React from 'react';
import { Link } from "react-router-dom";

class HeaderJs extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoginedIn : props.loginStatus,
    }
  }

  logoutChange(){
    let loginData;
    if(localStorage.getItem('loginData') && localStorage.getItem('loginData') !== undefined){
      loginData = JSON.parse(localStorage.getItem('loginData'));
    }
    if(loginData){
      this.props.updateLogout();  
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoginedIn: nextProps.loginStatus});  
  }
    render(){
        let htmlContent;
        if(this.state.isLoginedIn){
          htmlContent = <ul className="nav navbar-nav" style={{'display':'-webkit-box'}}>
                    <li className="active" style={{'paddingRight':'10px'}}><Link  to="/dashboard">Home Page</Link></li>
                  </ul>; 
        }else{
          htmlContent="";
        }
        return(
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">Digital ATM Home</Link>
            </div> 
              {htmlContent}  
              { this.state.isLoginedIn ?   
                <ul className="nav navbar-right">
                  <button type="submit" className="btn btn-primary" onClick={this.logoutChange.bind(this)}>Logout</button>
                </ul> :
                <ul className="nav navbar-right">
                  <li style={{'paddingRight':'10px'}}><Link  to="/login">Login</Link></li>
                </ul>
              }  
            </div>
          </nav>   
        )
    }
}

export default HeaderJs;