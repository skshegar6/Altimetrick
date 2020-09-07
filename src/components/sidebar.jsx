import React from 'react';
import { Link } from 'react-router-dom';
import WithAuth from './authicateComponent.jsx';

class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
        };
    }
    render(){
        return(
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Cash Withdrawal</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Check Balanace</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Funds or Cheque Deposit</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Funds Transfer</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Print Receipt</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/withdrawl">Bank Services</Link>
            </div>
            
        )
    }
}

export default WithAuth(Sidebar);
