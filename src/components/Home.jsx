import React from 'react';
import { Link } from "react-router-dom";
import HomePageImage from '../tools/atmImage.jpg';
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let htmlLinkData;
        if(this.props.stateData.isLoginedIn){
            htmlLinkData = <Link  to="/dashboard">Go to Bank Dashboard</Link>;
        }else{
            htmlLinkData = <Link  to="/login">Click to Login</Link>
        }
        return(
            <div className= "container">
                <img src={HomePageImage}  style={{'width':'100%'}}/>
                <h2>Welcome to Digital ATM for banking users ATM process</h2>
                {htmlLinkData}
            </div>
        )
    }
}

export default Home;