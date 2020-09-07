
import React from 'react';
import WithAuth from './authicateComponent.jsx';

class Cashwithdrawl extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
        };
    }
    render(){
        return(
            <>
                <h1 className="mt-4">Cashwithdrawl</h1>
                <form action="/action_page.php">
                    <div className="form-group">
                        Enter Withdrawl Amount: <input type="text" className="form-control" name="name" value={this.state.name} />
                    </div>
                    <div className="row">
                        <div className="col-md-6" style={{'textAlign':'center'}}>
                            <button type="submit" className="btn btn-primary" >Cancel</button>
                        </div>
                        <div className="col-md-6" style={{'textAlign':'center'}}>
                            <button type="submit" className="btn btn-primary" >Enter</button>       
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default WithAuth(Cashwithdrawl);
