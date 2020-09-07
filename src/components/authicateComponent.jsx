import React from "react";
import { Redirect } from "react-router-dom";
export function WithAuth(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated() {
            return this.props.authed;
        }

        /**
         * Render
         */
        render() {
            return (
                <div>
                    { this.props.authed === true ? <Component {...this.props} /> : <Redirect to='/' /> }
                </div>
            );
        }
    };
}

export default WithAuth;