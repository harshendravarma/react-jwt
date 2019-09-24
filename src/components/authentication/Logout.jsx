import React, { Component } from 'react';
import authenticationService  from "../../Services/AuthenticationService";

class Logout extends Component {
    componentDidMount() {
        authenticationService.logout();
        this.props.history.replace("/");
    }
    render() { 
        return ( <div>
            this is logout</div>);
    }
}
 
export default Logout;