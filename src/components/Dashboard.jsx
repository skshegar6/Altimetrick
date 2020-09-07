import React from 'react';
import WithAuth from './authicateComponent.jsx';
import Sidebar from './sidebar.jsx';
import Cashwithdrawl from './cashwithdrawl.jsx';

class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
        };
    }

    render(){
        return (
              <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right col-md-3" id="sidebar-wrapper">
                      <Sidebar authed={this.props.authed}/>
                    </div>
                    <div id="page-content-wrapper col-md-8" style={{'width':'50%'}}>
                      <div className="container-fluid">
                      <Cashwithdrawl authed={this.props.authed} />
                      </div>
                    </div>
              </div>
        )
    }
}
  
export default WithAuth(DashBoard);